import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const prerender = false;

export async function POST({ request }) {
  const { input } = await request.json();
  try {
    const client = new OpenAI();
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "genere un resumen del texto recibido, con una extensión máxima de la mitad del texto recibido" },
        { role: "user", content: input },
      ],
    });
    return new Response(JSON.stringify({
      status: 200,
      output: response.choices[0].message.content
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in OpenAI request:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
