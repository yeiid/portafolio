import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
   
    try {
      const { name, email, project } = req.body;
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['recipient@example.com'], // Reemplaza con la dirección de correo electrónico a la que deseas enviar el correo
        subject: 'New Project Inquiry',
        text: `Hello,\n\nYou have received a new project inquiry.\n\nName: ${name}\nEmail: ${email}\nProject: ${project}`,
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  }

