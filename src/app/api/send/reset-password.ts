"use server";

import ResetPasswordEmail from "@/components/emails/ResetPassword";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendResetPassword(email: string) {
  console.log("send");
  try {
    const { data, error } = await resend.emails.send({
      from: "definitive.vadam@outlook.com",
      to: ["d7hrz44@gmail.com"],
      subject: "Hello world",
      react: ResetPasswordEmail() as ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
