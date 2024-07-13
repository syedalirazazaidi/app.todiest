import React from "react";
import { NotebookIcon, Sun } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className=" body-font bg-[#FCFAF8] border-b-[1px] border-black/10">
        <div className=" mx-auto flex justify-between flex-wrap p-5 flex-row md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <NotebookIcon size="30px" color="#E14C3E" />
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Sun size="30px" color="#E14C3E" />
          </nav>
        </div>
      </header>
    </div>
  );
}
