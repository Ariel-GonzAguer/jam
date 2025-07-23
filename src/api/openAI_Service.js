import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export default async function generateText(input) {
  try {
    const client = new OpenAI();

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        role: "system",
        content: "generar un resumen del texto recibido"
      ]
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("Error:", error);
  }

}
