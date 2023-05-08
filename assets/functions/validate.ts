import axios from "axios";

type Message = {
  data: {
    message: string;
  };
};

async function authUser(): Promise<string | Error> {
  try {
    const res: Message = await axios.get("/api/validate");
    const { message } = res.data;
    return message;
  } catch (err) {
    return new Error("Error validating user");
  }
}

export default authUser;
