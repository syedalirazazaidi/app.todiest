import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
interface NAVLINK {
  navlink: NavItem[];
}

export default function Dashboard({ navlink }: NAVLINK) {
  const rendernav = navlink.map(
    ({ icon, title, href, label, description }, index) => {
      const Icon = Icons[icon];

      return (
        <div key={index}>
          <Link
            href={`/${href}`}
            className="flex space-x-2 space-y-1 text-[13px]"
          >
            <Icon className={`ml-3 size-5`} />

            <p className="flex flex-col">{title}</p>
          </Link>
        </div>
      );
    }
  );
  return (
    <>
      <div>{rendernav}</div>
    </>
  );
}
