import { HomeNavbar } from "@/modules/common/HomeNavbar";
import { Footer } from "@/modules/common/Footer";
import { SidebarProvider, SidebarInset } from "@components/ui/sidebar";
import { Toaster } from "sonner";
import { HomeSidebar } from "./HomeSidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <HomeNavbar />
      <div className="block sm:hidden">
        <HomeSidebar />
      </div>
      <SidebarInset className="">
        <Toaster position="top-center" />
        <div className={`w-full flex flex-col mt-16`}>
          <main className="w-full flex-1">{children}</main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
