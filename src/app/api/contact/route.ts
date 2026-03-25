import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, rm, message } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // --- Resend integration (uncomment when RESEND_API_KEY is set) ---
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Hungle Realty <noreply@hunglerealty.ca>',
    //   to: 'hunglerealestate@outlook.com',
    //   subject: `New Lead: ${name} — ${rm}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>RM:</strong> ${rm}</p>
    //     <p><strong>Message:</strong> ${message || 'No message provided.'}</p>
    //   `,
    // });

    // --- Supabase integration (uncomment when SUPABASE_URL / SUPABASE_KEY are set) ---
    // import { createClient } from '@supabase/supabase-js';
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
    // await supabase.from('leads').insert({
    //   name, phone, email, rm, message,
    //   source: 'contact-form',
    //   status: 'new',
    // });

    // For now, log the submission (visible in Vercel function logs)
    console.log("📩 New lead submission:", { name, phone, email, rm, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
