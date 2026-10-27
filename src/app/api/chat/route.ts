import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { NextResponse } from "next/server";

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `
You are the official PhotoOS AI Assistant.

PhotoOS is an AI-powered photography management platform for photographers and studios.

Your job is to:
- Answer questions about PhotoOS clearly and professionally.
- Help visitors understand PhotoOS features, pricing, Client App, AI capabilities and free trial.
- Never invent PhotoOS features, prices or policies.
- If you do not know something about PhotoOS, clearly say that you do not have that information.
- Keep answers concise and helpful.
- Use a friendly professional tone.
- You can understand and respond in English, Marathi, Hindi, and mixed Marathi-English.
- When appropriate, encourage the visitor to explore the relevant PhotoOS website page.

Important current website pages:
- About: /about
- Pricing: /pricing
- Pricing comparison: /pricing/compare
- Blog: /blog
- Contact: /contact
- Sign Up / Free Trial: /sign-up

When answering a question, focus on the user's actual intent.
Do not invent pages or URLs.

The website uses these page purposes:
- /about = what PhotoOS is, platform overview, features, AI capabilities
- /pricing = pricing, plans, storage, users, events, support and plan features
- /pricing/compare = detailed plan comparison
- /blog = educational articles and PhotoOS updates
- /contact = contact, enquiries and human assistance
- /sign-up = start Free Trial / create account

Keep the answer concise.
Do not output raw URLs unless specifically asked.
`;

export async function POST(request: Request) {
  try {
    const ai = getGeminiClient();
    if (!ai) {
      return NextResponse.json(
        { error: "AI Assistant is currently unavailable." },
        { status: 503 },
      );
    }

    const body = await request.json();

    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    let response;

    try {
      response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: message,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });
    } catch (primaryError) {
      console.warn(
        "Gemini 3.8 Flash unavailable. Trying Gemini 3.7 Flash fallback.",
        primaryError,
      );

      try {
        response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: message,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.LOW,
            },
          },
        });
      } catch (secondaryError) {
        console.warn(
          "Gemini 3.7 Flash unavailable. Trying Gemini 3.5 Flash-Lite fallback.",
          secondaryError,
        );

        response = await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",
          contents: message,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.LOW,
            },
          },
        });
      }
    }

    const reply =
      response.text ?? "Sorry, I could not generate a response.";

    const q = message.toLowerCase();

    const pageLinks: Array<{
      label: string;
      href: string;
    }> = [];

    const addPage = (label: string, href: string) => {
      if (!pageLinks.some((page) => page.href === href)) {
        pageLinks.push({ label, href });
      }
    };

    /*
     * PhotoOS overview / features / AI
     */
    if (
      q.includes("photoos") ||
      q.includes("what is") ||
      q.includes("about") ||
      q.includes("feature") ||
      q.includes("ai") ||
      q.includes("face matching") ||
      q.includes("face") ||
      q.includes("selfie") ||
      q.includes("client app") ||
      q.includes("gallery") ||
      q.includes("photographer") ||
      q.includes("studio")
    ) {
      addPage("Explore PhotoOS & AI Features →", "/about");
    }

    /*
     * Pricing
     */
    if (
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("cost") ||
      q.includes("plan") ||
      q.includes("399") ||
      q.includes("799") ||
      q.includes("1249") ||
      q.includes("₹") ||
      q.includes("storage")
    ) {
      addPage("View PhotoOS Pricing →", "/pricing");
    }

    /*
     * Detailed comparison
     */
    if (
      q.includes("compare") ||
      q.includes("comparison") ||
      q.includes("difference") ||
      q.includes("which plan") ||
      q.includes("features between")
    ) {
      addPage("Compare All Plans →", "/pricing/compare");
    }

    /*
     * Free Trial / Signup
     */
    if (
      q.includes("trial") ||
      q.includes("free") ||
      q.includes("signup") ||
      q.includes("sign up") ||
      q.includes("register") ||
      q.includes("create account") ||
      q.includes("start")
    ) {
      addPage("Start Your Free Trial →", "/pricing");
    }

    /*
     * Contact / Sales / Support
     */
    if (
      q.includes("contact") ||
      q.includes("human") ||
      q.includes("support") ||
      q.includes("sales") ||
      q.includes("enquiry") ||
      q.includes("talk to")
    ) {
      addPage("Contact PhotoOS Team →", "/contact");
    }

    /*
     * Blog / learning
     */
    if (
      q.includes("blog") ||
      q.includes("article") ||
      q.includes("articles") ||
      q.includes("learn") ||
      q.includes("guide")
    ) {
      addPage("Explore PhotoOS Blog →", "/blog");
    }

    /*
     * If nothing matched, always provide the main relevant page.
     */
    if (pageLinks.length === 0) {
      addPage("Learn More About PhotoOS →", "/about");
    }

    return NextResponse.json({
      success: true,
      reply,
      pageLinks,
    });
  } catch (error) {
    console.error("Gemini chat error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to connect to the AI assistant.",
      },
      { status: 500 },
    );
  }
}
