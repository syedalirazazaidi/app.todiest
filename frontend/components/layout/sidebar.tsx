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
import { Icons } from "../icons";

export function Sidebar() {
  const Add = Icons["plus"];

  return (
    <Sheet defaultOpen>
      {/* <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger> */}
      <SheetContent className=" w-[240px]">
        <SheetHeader>
          <SheetTitle className="flex gap-1 items-center">
            
           <Add  color="#ffffff" className="  size-6 bg-[#A81F00] rounded-full" />
            <p className="text-[#A81F00] text-[17px]"> Add task</p>
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 ">
          <Dashboard navlink={navItems} />
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
