"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBarLoader() {
  return (
    <AppProgressBar
      height="4px"
      color="#ef4444"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
