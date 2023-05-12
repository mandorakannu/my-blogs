import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const token = request.cookies.get("validation")?.value;
  const Key = process.env.SECRET_KEY;
  const headers: Object = {
    headers: { "content-type": "application/json" },
  };
  if (token) {
    try {
      const decoded = verify(token, Key!);
      if (decoded) {
        return new Response(JSON.stringify({ message: "success" }), headers);
      } else {
        return new Response(JSON.stringify({ message: "Error" }), headers);
      }
    } catch (err: unknown) {
      return new Response(JSON.stringify({ message: err }), {...headers, status: 500});
    }
  } else {
    return new Response(
      JSON.stringify({ message: "Authenicate is not occured!" }),
      {...headers, status: 500}
    );
  }
}
