import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// API Key check karne ke liye safe initialization
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, eventType, message } = body;

    // 1. Check karo ki Resend sahi se initialize hua ya nahi
    if (!resend) {
      console.error("Backend Error: RESEND_API_KEY missing in .env.local");
      return NextResponse.json(
        { success: false, message: ".env.local file me RESEND_API_KEY nahi mili bhai!" },
        { status: 500 }
      );
    }

    // 2. Email send logic
    const emailResponse = await resend.emails.send({
      from: 'The DreamDecor Form <onboarding@resend.dev>',
      to: 'nitingupta47507@gmail.com', // Aapki email ID jahan message aana hai
      subject: `New Inquiry: ${name} - ${eventType}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
      `,
    });

    // 3. Resend se koi error aaya toh handle karo
    if (emailResponse.error) {
      console.error("Resend API returned an error:", emailResponse.error);
      return NextResponse.json(
        { success: false, message: emailResponse.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Mail sent successfully!" });

  } catch (error: any) {
    // Agar poore backend code me kahin bhi crash hua toh console me print hoga
    console.error("CRITICAL BACKEND ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}