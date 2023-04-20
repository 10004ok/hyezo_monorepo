import {
  cert,
  getApp,
  initializeApp,
  type App,
  type AppOptions,
  type ServiceAccount,
} from "firebase-admin/app";
import { MulticastMessage, getMessaging } from "firebase-admin/messaging";
import { FirebaseError } from "firebase/app";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

const global = globalThis as unknown as { firebase: App };

type TData = {
  successCount?: number;
  failureCount?: number;
};
type TError = { message: string };

type SenderInfo = {
  receiverId: string;
  senderName: string;
  senderImage: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session?.user) {
    res.status(401).json({ message: "You are not logined 🦠" });
    return;
  }

  const { senderName, senderImage, content, receiverId }: SenderInfo = req.body;

  const config = require("/worker/firebase-account.ts").config;
  const serviceAccount = JSON.parse(JSON.stringify(config)) as ServiceAccount;

  const firebaseConfig: AppOptions = {
    credential: cert(serviceAccount),
    databaseURL: env.FIREBASE_ADMIN_DATABASE_URL,
  };

  try {
    getApp();
  } catch (error) {
    if ((error as FirebaseError).code === "app/no-app")
      global.firebase = initializeApp(firebaseConfig);
  }

  try {
    const subTokens = await prisma.subscription.findMany({
      where: {
        userId: receiverId,
      },
      select: {
        endpoint: true,
      },
    });

    if (!subTokens[0])
      return res.status(202).json({
        successCount: 0,
      });
    else {
      const endpoints = subTokens.map(obj => obj.endpoint);

      const message: MulticastMessage = {
        data: {
          title: `${senderName}님이 메시지를 보냈습니다`,
          body: content,
          icon: "/manifest/favicon-96x96.png",
          link: "/chat",
        },
        tokens: endpoints,
      };

      const sendMessage = await getMessaging(global.firebase).sendMulticast(message);

      return res.status(202).json({
        successCount: sendMessage.successCount,
        failureCount: sendMessage.failureCount,
      });
    }
  } catch (error) {
    console.error("Error sending push notification:", error);
    return res.status(500).json({ message: (error as Error).message });
  }
}
