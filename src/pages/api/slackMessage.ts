import { NextApiHandler } from "next";
import * as bolt from "@slack/bolt";
import type { FormInputs, SlackMessageResponse } from "@/types";

const handler: NextApiHandler<SlackMessageResponse> = async (req, res) => {
  try {
    const { name, email, subject, message } = JSON.parse(
      req.body
    ) as FormInputs;
    // initialize slack app
    const app = new bolt.App({
      signingSecret: process.env.SLACK_SIGNING_SECRET,
      token: process.env.SLACK_BOT_TOKEN,
    });
    // get slack channels
    const { channel } = await app.client.conversations.open({
      users: process.env.SLACK_USER_ID,
    });

    if (channel && channel.id) {
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
      return res.send({ status: "success", message: "Message sent" });
    }
    res.send({ status: "error", message: "Error sending message" });
  } catch (e) {
    console.log(e);
    res.send({ status: "error", message: "Error sending message" });
  }
};

export default handler;
