import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";
<<<<<<< HEAD
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) : Promise<Response> {
  const { email, password } = await request.json(); // Accepting the email & password from the client side

  const validEmailId: boolean = bcryptjs.compareSync(
    email,
    process.env.EMAIL_ID!
  );
  const validEmailPassword: boolean = bcryptjs.compareSync(
=======

export async function POST(request: Request) {
  const { email, password } = await request.json(); // Accepting the email & password from the client side

  const validEmailId = bcryptjs.compareSync(email, process.env.EMAIL_ID!);
  const validEmailPassword = bcryptjs.compareSync(
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
    password,
    process.env.EMAIL_PASSWORD!
  );

<<<<<<< HEAD
  const headers: Object = {
    headers: { "content-type": "application/json" },
  };

  if (validEmailId && validEmailPassword) {
    const token:string = createToken();
=======
  if (validEmailId && validEmailPassword) {
    const token = createToken();
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
    // @ts-ignore
    // I am adding this @ts-ignore because I am getting an error in the cookies().set() method, at the time of writing this code. Date: 07-05-2023
    cookies().set({
      name: "validation",
      value: token,
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "strict",
    });
<<<<<<< HEAD
    return new Response(JSON.stringify({ message: "success" }), headers);
  }
  return new Response(JSON.stringify({ message: "Error" }), headers);
}

function createToken() : string {
  return sign(
    { id: "1", content: "Authenatication", value:"true" },
=======
    return new Response(JSON.stringify({ message: "success" }), {
      headers: { "content-type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Error" }), {
      headers: { "content-type": "application/json" },
    });
  }
}

function createToken() {
  return sign(
    { id: "1", content: "This is my cookie" },
>>>>>>> 13e5a1a8dc84d598ceeb5f3e92336b08d8b18e2d
    process.env.SECRET_KEY!
  );
}
