"use client";

import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

export default function page() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" ">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
        Inbox
      </h1>
      <h1 className=" text-1xl font-semibold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">
        Priority 1
      </h1>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

      <div
        className="flex justify-between items-center gap-1 cursor-pointer
        "
        onClick={() => alert("hi developer")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>
          <span className="w-5 h-5 rounded-full bg-amber-100 border-[2px] border-amber-600 inline-block"></span>
          convallis, lorem enim condimentum mauris,
        </p>
        <div>{isHovered && <Pencil className="w-5 h-5 text-amber-600" />}</div>
      </div>
    </div>
  );
}
