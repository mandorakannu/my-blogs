"use client";
import ProgressBar from "next-nprogress-bar";


export default function ProgressBarLoader() {

  return  <ProgressBar
    height="4px"
    color="#ef4444"
    options={{ showSpinner: false }}
    shallowRouting
    appDirectory
  />

}
