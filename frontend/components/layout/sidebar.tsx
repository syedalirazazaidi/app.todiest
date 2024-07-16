import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Dashboard from "../dashboard-nav";
import { navItems } from "@/constants/data";

export function Sidebar() {
  return (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className=" w-72">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 ">
          <Dashboard navlink={navItems} />
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
