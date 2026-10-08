import EmailTemplate from "@/app/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const firstRecipient = process.env.FIRST_RECIPIENT as string
const secondRecipient = process.env.SECOND_RECIPIENT as string


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, additionalName, emailAddress, message } = body;

    if (!(firstName && additionalName && emailAddress)) {
      return NextResponse.json(
        { error: "payload is required" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Lackverket <noreply@lackverket.se>",
      to: [firstRecipient, secondRecipient],
      subject: "A new customer just came in!",
      react: (
        <EmailTemplate
          firstName={firstName}
          additionalName={additionalName}
          emailAddress={emailAddress}
          message={message}
        />
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
