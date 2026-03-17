import { type NextRequest, NextResponse } from "next/server";

interface MathSolveRequest {
  formula: string;
}

function getMathApiBaseUrl() {
  const raw =
    process.env.MATH_API_BASE_URL ??
    process.env.NEXT_PUBLIC_MATH_API_BASE_URL ??
    "http://localhost:9000";
  return raw.replace(/\/$/, "");
}

export async function POST(request: NextRequest) {
  try {
    const body: MathSolveRequest = await request.json();

    if (!body.formula) {
      return NextResponse.json(
        { error: "Formula is required" },
        { status: 400 }
      );
    }

    const baseUrl = getMathApiBaseUrl();
    const response = await fetch(
      `${baseUrl}/api/math/solve`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formula: body.formula }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          error: `Math server error: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();

      // Try to parse as JSON anyway in case content-type header is missing
      try {
        const jsonData = JSON.parse(textResponse);
        return NextResponse.json(jsonData);
      } catch {
        return NextResponse.json(
          {
            error: "Invalid response format from math server",
            details: `Expected JSON but received: ${textResponse}`,
          },
          { status: 502 }
        );
      }
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      if (
        error.message.includes("ECONNREFUSED") ||
        error.message.includes("fetch")
      ) {
        const baseUrl = getMathApiBaseUrl();
        return NextResponse.json(
          {
            error: "Unable to connect to math solver server",
            details:
              `Please ensure your math server at ${baseUrl} is running and accessible`,
          },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
