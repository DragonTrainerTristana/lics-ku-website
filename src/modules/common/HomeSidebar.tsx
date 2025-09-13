import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "./logo";
import { GnbButtons } from "./GnbButtons";

export const HomeSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-start px-4 py-2 gap-2 h-16">
          <SidebarTrigger icon={<ChevronLeft className="w-4 h-4" />} />
          <Link href="/">
            <Logo hideIcon />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <GnbButtons />
        </Suspense>
      </SidebarContent>
    </Sidebar>
  );
};
