"use server";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/contactFrom/EmailTemplate';
const resend = new Resend("re_NUNBjyAg_21xRvg95NMCBukYdqz7B2w5f");

interface SendEmailProps {
    useremail:string;
    username:string;
    message:string;
}
export async function sendEmail(props:SendEmailProps) {
    console.log(props)
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['suhel7822@gmail.com'],
      subject: 'Suhel khan contact form response.',
    //   react: EmailTemplate({username: props.username, message: 'Thankyou for contacting me. I will react out to you as soon as possible.'})
    text: 'Hello from suhel khan'
    });

    return JSON.parse(JSON.stringify(data))
  } catch (error) {
    return NextResponse.json(error);
}
}
