import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // For the hackathon demo we keep a smart fallback.
    // When you add NEAR_AI_API_KEY in .env.local it will use real private inference.

    const apiKey = process.env.NEAR_AI_API_KEY;

    if (apiKey) {
      // Real private call to NEAR AI Cloud
      const response = await fetch("https://cloud-api.near.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "zai-org/GLM-5.1-FP8", // TEE model
          messages: [
            {
              role: "system",
              content:
                "You are Lumen, a private AI companion living as an NFT on NEAR. You are calm, helpful, slightly witty, and always respect the user's privacy. Keep answers concise.",
            },
            ...messages,
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "I could not generate a response.";

      return NextResponse.json({ reply });
    }

    // Fallback demo response (no API key needed)
    const lastUser = messages?.filter((m: any) => m.role === "user").pop()?.content || "";
    const reply = `I received: "\( {lastUser.slice(0, 80)} \){lastUser.length > 80 ? "..." : ""}". 

In the full version this reply comes from a model running inside a Trusted Execution Environment on NEAR AI Cloud. Your conversation never leaves the secure enclave.`;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: "Something went wrong while thinking. Please try again." },
      { status: 500 }
    );
  }
}