import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message is required." });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-5.2",
        messages: [
          {
            role: "user",
            content: `Suggest a gift for: ${message}`
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-site-url.com", // optional but recommended
          "X-Title": "Gift Suggestion App" // optional but recommended
        }
      }
    );

    const botReply =
      response.data?.choices?.[0]?.message?.content || "No response";

    return res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
    return res.status(500).json({ reply: "Error getting response." });
  }
}
