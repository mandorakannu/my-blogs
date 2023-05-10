"use client";
import { Oval } from "react-loader-spinner";

export default function loading() {
  return (
    <Oval
      height={30}
      width={30}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center my-3"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="red"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
