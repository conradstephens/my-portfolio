import { NextResponse } from "next/server";
import * as bolt from "@slack/bolt";
import type { FormInputs } from "@/types";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = (await req.json()) as FormInputs;
    // initialize slack app
    const app = new bolt.App({
      signingSecret: process.env.SLACK_SIGNING_SECRET,
      token: process.env.SLACK_BOT_TOKEN,
    });
    // get slack channels
    const { channel } = await app.client.conversations.open({
      users: process.env.NEXT_PUBLIC_SLACK_USER_ID,
    });

    if (!channel || !channel.id) {
      return NextResponse.json(
        { status: "error", message: "Error sending message" },
        { status: 500 }
      );
    }

    await app.client.chat.postMessage({
      channel: channel.id,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `Message from ${name}`,
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:*\n${message}`,
          },
        },
      ],
      text: `Message from ${name}`,
    });
    return NextResponse.json(
      { status: "success", message: "Message sent" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { status: "error", message: "Error sending message" },
      { status: 500 }
    );
  }
}
