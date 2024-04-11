import {Resend} from "resend";

const resend = new Resend("re_NUNBjyAg_21xRvg95NMCBukYdqz7B2w5f");

export async function sendEmail() {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['suhel7822@gmail.com'],
        subject: 'Message from Suhel khan contact form',
        text: 'Hello world!',
      });
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  }