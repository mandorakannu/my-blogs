"use client"
import { InfinitySpin } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="grid place-content-center h-screen">
      <InfinitySpin color="#F87171" />
    </div>
  );
}
