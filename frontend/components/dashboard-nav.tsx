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
            className="flex flex-row items-center justify-start gap-1 py-2 text-[13px] "
          >
            <Icon className={`size-5`} />

            <p className="text-center">{title}</p>
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
