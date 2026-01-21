import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check if API key is configured
  if (!process.env.OPENROUTER_API_KEY) {
    console.error("OPENROUTER_API_KEY is not configured");
    return res.status(500).json({ reply: "Server configuration error: API key not set." });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message is required." });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
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
          "HTTP-Referer": process.env.VERCEL_URL || "http://localhost:3000"
        }
      }
    );

    const botReply = response.data.choices[0].message.content;

    return res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      return res.status(401).json({ reply: "Authentication failed. Check API key." });
    }
    if (error.response?.status === 429) {
      return res.status(429).json({ reply: "Rate limited. Try again later." });
    }
    
    return res.status(500).json({ 
      reply: "Error getting response.",
      debug: process.env.NODE_ENV === "development" ? error.message : undefined 
    });
  }
}
