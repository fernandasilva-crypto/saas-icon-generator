import OpenAI from "openai";
import { NextResponse } from "next/server";

const BASE_STYLE = `
You are a professional 3D claymorphism icon generator for mobile game UI.

STYLE DEFINITION (MANDATORY):
The icon must look like a soft 3D clay object.
This is NOT flat design.
This is NOT vector stroke illustration.
This is a 3D clay render with a silhouette outline.

CLAYMORPHISM REQUIREMENTS:
• Soft 3D clay appearance
• Smooth rounded surfaces
• Sculpted look
• Minimalist geometry
• Simple forms only
• No small details
• No texture
• No noise
• Clean surface

OUTLINE RULE (CRITICAL):
• One single black outline (#000000)
• 2px relative thickness
• Applied ONLY to external silhouette
• No internal outlines
• No internal strokes
• Continuous outline like sticker border

SHADING:
• Soft 3D shading
• Light from top-left
• Soft highlights
• Smooth gradients
• No harsh shadows
• No drop shadow
• No ground shadow

COMPOSITION:
• 1:1 aspect ratio
• 1024x1024
• Transparent background
• Icon centered
• Occupies most of canvas

DO NOT create flat icons.
DO NOT add internal strokes.
Always produce professional mobile game asset quality.
`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: `${BASE_STYLE}

Icon to create: ${prompt}`,
      size: "1024x1024",
      background: "transparent",
    });

    return NextResponse.json({
      image: result.data[0].url,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao gerar imagem" },
      { status: 500 }
    );
  }
}
