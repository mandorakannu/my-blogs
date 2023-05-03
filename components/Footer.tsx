import { useMemo } from "react";
import SocialIcons from "./Social-Icons";
export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-red-400">
        <h6 className="text-white py-2 pointer-events-none">
          &copy; {year} by Kannu Mandora. All right reserved.
        </h6>
        <SocialIcons classes="text-white" />
      </div>
    </>
  );
}
