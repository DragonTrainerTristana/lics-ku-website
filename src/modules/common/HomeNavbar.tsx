import Link from "next/link";
import { Suspense } from "react";

import { GnbButtons } from "@/modules/common/GnbButtons";
import { Logo } from "@/modules/common/logo";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-black flex items-center justify-end px-6 pr-5 z-50">
      <div className="flex items-center w-full gap-2 sm:justify-between">
        {/* MENU AND LOGO */} <SidebarTrigger className="sm:hidden" />
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden flex-1 sm:flex justify-end gap-2 md:gap-4">
          <Suspense fallback={<div className="flex gap-2 md:gap-4">Loading...</div>}>
            <GnbButtons />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};
