import { NextApiHandler } from "next";
import * as bolt from "@slack/bolt";
import type { FormInputs, SlackMessageResponse } from "@/types";

interface RecapatchResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
}

const handler: NextApiHandler<SlackMessageResponse> = async (req, res) => {
  try {
    const { name, email, subject, message, token } = JSON.parse(
      req.body
    ) as FormInputs & { token: string };
    const recaptchaRequest = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    );
    const recaptchaRes = (await recaptchaRequest.json()) as RecapatchResponse;
    // check recaptcha res
    console.log("isHuman => ", recaptchaRes.success);
    if (!recaptchaRes.success) {
      return res.send({ status: "error", message: "Error sending message" });
    }
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
      return res.send({ status: "error", message: "Error sending message" });
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
    res.send({ status: "success", message: "Message sent" });
  } catch (e) {
    console.log(e);
    res.send({ status: "error", message: "Error sending message" });
  }
};

export default handler;
