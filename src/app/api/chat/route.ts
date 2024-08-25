import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";

const systemPrompt = `
You are an intelligent assistant designed to help students find the best professors based on their queries. When a user asks a question about a specific subject, teaching style, or professor attributes, you will:

1. Retrieve relevant data from a database of professor reviews and ratings.
2. Analyze the user's query to understand their preferences (e.g., subject expertise, teaching style, availability).
3. Generate a response that includes the top 3 professors who best match the user's criteria, along with a brief summary of each professor's strengths and student feedback.

Ensure that your responses are concise, informative, and tailored to the user's needs. If the user asks for more details about a specific professor, provide additional information as needed.
`;

export async function POST(req: any) {
  const data = await req.json();
  console.log(data);
  if (!data || data.length === 0) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 }
    );
  }

  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || "",
  });

  // console.log(pc);
  const index = pc.Index("rag").namespace("ns1");
  const openai = new OpenAI();
  const text = data[data.length - 1].content;
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });
  console.log(embedding);
  const results = await index.query({
    topK: 10,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });
  let resultString = "Returned results:";
  results.matches.forEach((match) => {
    resultString += `\n
    Professor: ${match.id}
    Review: ${match.metadata?.starts}
    Subject: ${match.metadata?.subject}
    Start: ${match.metadata?.starts}
    \n\n
    `;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage.map((msg: any) => ({
        role: "user",
        content: msg.content,
      })),
      { role: "user", content: lastMessageContent },
    ],
    model: "gpt-4o-mini",
    stream: false,
  });
  return new NextResponse(completion.choices[0].message.content);
}
