import Logo from "@components/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Hambar() {
  return (
    <>
      <div className="sm:hidden flex justify-between items-center py-2 px-4  border-b-4 border-red-400 sticky top-0 bg-white z-50">
        <Logo />
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </>
  );
}
