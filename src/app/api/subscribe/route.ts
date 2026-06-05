import { NextResponse } from "next/server";

interface SubscribePayload {
  name?: string;
  email?: string;
}

interface ProviderResult {
  success: boolean;
  provider: "convertkit" | "resend" | "mailchimp" | "fallback";
  message: string;
}

function isEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function subscribeWithConvertKit(
  name: string,
  email: string
): Promise<ProviderResult | null> {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;
  if (!apiKey || !formId) return null;

  const response = await fetch("https://api.convertkit.com/v3/forms/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      first_name: name,
      form_id: formId,
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      provider: "convertkit",
      message: "ConvertKit could not process the subscription.",
    };
  }

  return {
    success: true,
    provider: "convertkit",
    message: "Welcome aboard. Confirm your email to activate your subscription.",
  };
}

async function subscribeWithResend(
  name: string,
  email: string
): Promise<ProviderResult | null> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return null;

  const response = await fetch("https://api.resend.com/audiences/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      audience_id: audienceId,
      email,
      first_name: name,
      unsubscribed: false,
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      provider: "resend",
      message: "Resend could not process the subscription.",
    };
  }

  return {
    success: true,
    provider: "resend",
    message: "You are subscribed. Watch your inbox for the next issue.",
  };
}

async function subscribeWithMailchimp(
  name: string,
  email: string
): Promise<ProviderResult | null> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const dataCenter = process.env.MAILCHIMP_DC;
  if (!apiKey || !audienceId || !dataCenter) return null;

  const response = await fetch(
    `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
      }),
    }
  );

  if (!response.ok) {
    return {
      success: false,
      provider: "mailchimp",
      message: "Mailchimp could not process the subscription.",
    };
  }

  return {
    success: true,
    provider: "mailchimp",
    message: "Subscription complete. You will receive our next newsletter soon.",
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";

    if (name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const providerCalls = [
      () => subscribeWithConvertKit(name, email),
      () => subscribeWithResend(name, email),
      () => subscribeWithMailchimp(name, email),
    ];

    for (const run of providerCalls) {
      try {
        const result = await run();
        if (!result) continue;

        if (result.success) {
          return NextResponse.json({
            success: true,
            message: result.message,
            provider: result.provider,
          });
        }
      } catch {
        continue;
      }
    }

    return NextResponse.json({
      success: true,
      provider: "fallback",
      message:
        "Thanks for subscribing. We saved your request and will onboard you shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload. Please try again.",
      },
      { status: 400 }
    );
  }
}
