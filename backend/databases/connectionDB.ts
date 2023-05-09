import { connect } from "mongoose";
import { disconnect } from "mongoose";
export const connectDB = async () => {
  try {
    connect(process.env.DATABASE!);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  try {
    await disconnect();
    console.log("MongoDB Disconnected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
