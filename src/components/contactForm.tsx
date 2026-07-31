import * as DiscordWebhookPkg from 'discord-webhook-ts';
import Webhook from "discord-webhook-ts";
import { useState } from "react";
import { NineSliceFrame } from "@nine-slice-frame/react";

export default function ContactForm({ url = "", color = "" }) {
  const WebhookUrl = url;

const DiscordWebhook = (DiscordWebhookPkg as any).default ?? DiscordWebhookPkg;

const discordClient = new DiscordWebhook(WebhookUrl);

  const [content, setContent] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  function sendMessage() {
    console.log("run");
    const requestBody: Webhook.input.POST = {
        embeds: [
          {
            title: "New message",
            description: `Contact info: $${contact}`,
          },
          {
            fields: [
              {
                name: "Message",
                value: { content },
              },
            ],
          },
        ],
      }
      
    discordClient.execute(requestBody)
  }

  return (
    <div className="flex flex-col w full h-full p-7">
      <h1 className={`text-${color}-2 text-2xl`}>Your contact info</h1>
      <NineSliceFrame
        imagePath={`/${color}/button1.png`}
        slice={5}
        borderWidth={40}
        repeat="repeat"
        fill
        pixelated
        className="h-fit w-full p-3"
      >
        {" "}
        <input
          type="text"
          placeholder="How should i contact you? (e.g email adress, username...)"
          value={contact}
          className={`text-${color}-1`}
          onChange={(e) => {
            setContact(e.target.value ?? "");
          }}
        />
      </NineSliceFrame>

      <h1 className={`text-${color}-2 text-2xl`}>Your message</h1>
      <NineSliceFrame
        imagePath={`/${color}/button1.png`}
        slice={5}
        borderWidth={40}
        repeat="repeat"
        fill
        pixelated
        className="h-fit w-full p-3"
      >
        {" "}
        <input
          type="text"
          placeholder="Your message"
          className={`text-${color}-1`}
          value={content}
          onChange={(e) => {
            setContent(e.target.value ?? "");
          }}
        />
      </NineSliceFrame>

      <button onClick={() => sendMessage()}>
        <NineSliceFrame
          imagePath={`/${color}/button1.png`}
          slice={12}
          borderWidth={40}
          repeat="repeat"
          fill
          pixelated
          className="h-full w-full"
        >
          <p className={`p-4 text-${color}-1`}>Send</p>
        </NineSliceFrame>
      </button>
    </div>
  );
}
