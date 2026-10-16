"use server";

import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "@/types";

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function sendContactMessage(
  values: z.infer<typeof formSchema>,
): Promise<ContactResult> {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) return { ok: false, error: "Please check the form." };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set",
    );
    return { ok: false, error: "Messaging is unavailable right now." };
  }

  const { username, useremail, message } = parsed.data;
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    reply_to: useremail,
    subject: `Portfolio message from ${username}`,
    text: `${message}\n\n— ${username} <${useremail}>`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return {
      ok: false,
      error: "Couldn't send your message. Please try again.",
    };
  }
  return { ok: true };
}
