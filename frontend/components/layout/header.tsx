import React from "react";
import { NotebookIcon, Sun } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className=" body-font fixed w-full top-0  bg-[#FCFAF8] border-b-[1px] border-black/10">
        <div className=" mx-auto flex justify-between flex-wrap px-5 py-2 flex-row md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <NotebookIcon size="24px" color="#A81F00" />
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Sun size="24px" color="#A81F00" />
          </nav>
        </div>
      </header>
    </div>
  );
}
