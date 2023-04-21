import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/session";

export const metadata: Metadata = {
  title: "Welcome come",
};

export default async function LoginLayout({ children }: LayoutProps) {
  const user = await getCurrentUser();
  if (user?.nickname) redirect("/");

  return <div className="fixed inset-0">{children}</div>;
}
