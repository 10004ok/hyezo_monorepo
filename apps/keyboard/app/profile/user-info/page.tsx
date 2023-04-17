"use client";

import { Form, Input, SubmitButton, Text, zodSubmitHandler } from "@hyezo/ui";
import Image from "next/image";
import { useUserSession } from "~/hooks";
import { fetchPost, reloadSession } from "~/lib/utils";

export default function Info() {
  const user = useUserSession();

  const onSubmit: zodSubmitHandler = async ({ nickname }) => {
    await fetchPost("/api/updateNickname", { body: JSON.stringify(nickname) });
    reloadSession();
  };
  return (
    <Form
      onSubmit={onSubmit}
      className="grid w-full place-items-center gap-10 px-20 py-5"
    >
      <Image
        src={user?.image || "/images/pingu.webp"}
        alt="profile"
        width={120}
        height={120}
        className="rounded-full"
      />

      <div className="grid gap-2">
        <Text variant="xs/normal">닉네임</Text>
        <Input name="nickname" placeholder={user?.nickname || ""} />
      </div>

      <SubmitButton>Save Cahnges</SubmitButton>
    </Form>
  );
}