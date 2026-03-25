import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { Resend } from "resend";

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

    // 1. Save lead to Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createServiceClient();
        const { error: dbError } = await supabase.from("leads").insert({
          name,
          phone,
          email,
          rm: rm || null,
          message: message || null,
          source: "contact-form",
          status: "new",
        });

        if (dbError) {
          console.error("Supabase insert error:", dbError);
        } else {
          console.log("Lead saved to Supabase");
        }
      } catch (dbErr) {
        console.error("Supabase connection error:", dbErr);
      }
    }

    // 2. Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Hungle Realty <onboarding@resend.dev>",
          to: "adamhungle1@gmail.com",
          subject: `New Lead: ${name}${rm ? ` - ${rm}` : ""}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="color: #15803d;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                ${rm ? `<tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">RM</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${rm}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td>
                  <td style="padding: 8px;">${message || "No message provided."}</td>
                </tr>
              </table>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                Submitted via hunglerealty.ca contact form
              </p>
            </div>
          `,
        });
        console.log("Email sent via Resend");
      } catch (emailErr) {
        console.error("Resend email error:", emailErr);
      }
    }

    // Always log to console as fallback
    console.log("New lead:", { name, phone, email, rm, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
