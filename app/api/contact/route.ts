import { NextRequest } from "next/server";
import { connectDB, disconnectDB } from "@databases/connectionDB";
import contacts from "@models/contacts/contacts";

export async function POST(request: NextRequest) {
  const { email, message } = await request.json();
  try {
    await connectDB();
    const contact = await contacts.create({ email, message });
    console.log(contact);
    await disconnectDB();
    if (contact)
      return new Response(JSON.stringify({ result: "success" }), {
        status: 200,
      });
    else
      return new Response(JSON.stringify({ result: "error" }), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({ result: "error" }), { status: 500 });
  }
}
