import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(request: Request) {
  const { email, password } = await request.json(); // Accepting the email & password from the client side

  const validEmailId = bcryptjs.compareSync(email, process.env.EMAIL_ID!);
  const validEmailPassword = bcryptjs.compareSync(
    password,
    process.env.EMAIL_PASSWORD!
  );

  if (validEmailId && validEmailPassword) {
    const token = createToken();
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
    process.env.SECRET_KEY!
  );
}
