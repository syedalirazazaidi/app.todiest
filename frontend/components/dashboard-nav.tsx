import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";
interface NAVLINK {
  navlink: NavItem[];
}

export default function Dashboard({ navlink }: NAVLINK) {
  const rendernav = navlink.map(({ title, href, label, description }) => {
    return (
      <>
        <Link href={`/${href}`}>
          <p className="flex flex-col">{title}</p>
        </Link>
      </>
    );
  });
  return (
    <>
      <div>{rendernav}</div>
    </>
  );
}
