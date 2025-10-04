import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const sgResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: process.env.CONTACT_EMAIL || 'mossvictor600@gmail.com' }],
            subject: `New Portfolio Message from ${name}`,
          },
        ],
        from: { 
          email: process.env.FROM_EMAIL || 'noreply@yourdomain.com', 
          name: 'Portfolio Contact Form' 
        },
        reply_to: { email, name },
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
          {
            type: 'text/html',
            value: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            `,
          },
        ],
      }),
    });

    if (!sgResponse.ok) {
      const error = await sgResponse.text();
      console.error('SendGrid error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}