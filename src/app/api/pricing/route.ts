import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const audience = request.nextUrl.searchParams.get("audience");

  if (audience !== "photographer") {
    return NextResponse.json(
      { success: false, error: "Unsupported pricing audience." },
      { status: 400 }
    );
  }

  const backendUrl = process.env.PHOTOOS_PRICING_API_URL;

  if (!backendUrl) {
    return NextResponse.json(
      {
        success: false,
        connected: false,
        plans: [],
        error: "PhotoOS pricing backend is not configured yet.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const payload = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          connected: true,
          plans: [],
          error: payload?.error ?? "Unable to load pricing.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(
      {
        success: false,
        connected: false,
        plans: [],
        error: "Unable to connect to PhotoOS pricing backend.",
      },
      { status: 502 }
    );
  }
}
