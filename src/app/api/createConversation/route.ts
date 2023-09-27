import { NextRequest, NextResponse } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { systemPrompt } from "src/prompts/systemPrompt";

const openai = new OpenAI();

// This function handles POST requests to the /api/speechToText route
export async function POST(request: NextRequest) {
  // Parse the request body
  const req = await request.json();

  const content = req.content;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content,
        },
      ],
      stream: true,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    // Handle any errors that occur during the request
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({ error: error.response.data }, { status: 500 });
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json(
        { error: "An error occurred during your request." },
        { status: 500 }
      );
    }
  }
}
