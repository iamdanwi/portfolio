// app/api/contact/route.js
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const { name, email, subject, message } = await request.json();

        // Validate the required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Initialize Resend with your API key
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send the email
        const { data, error } = await resend.emails.send({
            from: email, // You'll verify your own domain later
            to: process.env.RECIPIENT_EMAIL || 'default@example.com',
            subject: `Website Contact: ${subject}`,
            replyTo: email,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Website Contact</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { message: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: 'Email sent successfully',
            id: data?.id || null
        }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        );
    }
}