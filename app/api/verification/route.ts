import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const headers: Object = {
    headers: { "content-type": "application/json" },
  };
  try {
    const { email, password } = await request.json(); // Accepting the email & password from the client side

    const validEmailId: boolean = await bcryptjs.compare(
      email,
      process.env.EMAIL_ID!
    );
    const validEmailPassword: boolean = await bcryptjs.compare(
      password,
      process.env.EMAIL_PASSWORD!
    );

    if (validEmailId && validEmailPassword) {
      const token: string = createToken();
      // @ts-ignore
      // I am adding this @ts-ignore because I am getting an error in the cookies().set() method, at the time of writing this code. Date: 07-05-2023
      cookies().set({
        name: "validation",
        value: token,
        httpOnly: true,
        path: "/",
        secure: true,
        sameSite: "strict",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });
      return new Response(JSON.stringify({ message: "success" }), headers);
    }
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error" }), {
      ...headers,
      status: 500,
    });
  }
}

function createToken(): string {
  return sign(
    { id: "1", content: "Authenatication", value: "true" },
    process.env.SECRET_KEY!
  );
}
