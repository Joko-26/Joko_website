import { use, useState } from "react";
import { NineSliceFrame } from "@nine-slice-frame/react";

export default function ContactForm({ url = "", color = "" }) {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function sendMessage() {
    setStatus("sending");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: `New message by: ${name}`,
              description: `Contact info: ${contact}`,
              fields: [
                {
                  name: "Message",
                  value: content || "(empty)",
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord API returned ${response.status}`);
      }
      setStatus("sent");
      setName("");
      setContact("");
      setContent("");
    } catch (err) {
      console.error("Failed to send webhook:", err);
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col w full h-full p-7">
      <h1 className={`text-${color}-1 text-2xl`}>Your name</h1>
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
          placeholder="Your name"
          className={`text-${color}-1`}
          value={name}
          onChange={(e) => {
            setName(e.target.value ?? "");
            setStatus("idle");
          }}
        />
      </NineSliceFrame>

      <h1 className={`text-${color}-1 text-2xl`}>Your contact info</h1>
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
        <textarea
          placeholder="How should i contact you? (e.g email adress, username...)"
          value={contact}
          className={`text-${color}-1 p-3 scrollbar min-h-25`}
          onChange={(e) => {
            setContact(e.target.value ?? "");
            setStatus("idle");
          }}
        />
      </NineSliceFrame>

      <h1 className={`text-${color}-1 text-2xl`}>Your message</h1>
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
        <textarea
          placeholder="Your message"
          className={`text-${color}-1 p-3 min-h-15 scrollbar`}
          value={content}
          onChange={(e) => {
            setContent(e.target.value ?? "");
            setStatus("idle");
          }}
        />
      </NineSliceFrame>

      <button onClick={() => sendMessage()}>
        <NineSliceFrame
          imagePath={`/${color}/button1.png`}
          slice={5}
          borderWidth={40}
          repeat="repeat"
          fill
          pixelated
          className="h-full w-full"
        >
          <p className={`p-4 text-${color}-1`}>
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send"}
          </p>
        </NineSliceFrame>
      </button>
    </div>
  );
}
