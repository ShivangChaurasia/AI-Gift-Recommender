import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-5.2",
        messages: [{ role: "user", content: `Suggest a gift for: ${message}` }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.status(200).json({
      reply: response.data.choices[0].message.content
    });

  } catch (err) {
    console.error("OpenRouter error:", err.response?.data || err.message);
    return res.status(500).json({ reply: null });
  }
}
