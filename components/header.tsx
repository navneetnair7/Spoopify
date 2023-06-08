"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactDOM;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => {
              router.back();
            }}
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transtion"
          >
            <RxCaretLeft size={32} className="text-white" />
          </button>
          <button
            onClick={() => {
              router.forward();
            }}
            className="rounded-full bg-black flex justify-center items-center hover:opacity-75 transtion"
          >
            <RxCaretRight size={32} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex justify-center items-center hover:opacity-75 transition">
            <HiHome className="text-black" size={22} />
          </button>
          <button className="rounded-full p-2 bg-white flex justify-center items-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={22} />
          </button>
        </div>
        <div className="flex justify-between gap-x-4 items-center">
          <>
            <div>
              <Button>Sign Up</Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
