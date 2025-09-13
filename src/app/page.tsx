import { MainHeroSection } from "@/modules/home/MainHeroSection";
import { NotificationSection } from "@/modules/home/NotificationSection";
import { TopResearchSection } from "@/modules/home/TopResearchSection";

export default async function Home() {
  return (
    <div className="w-full">
      <MainHeroSection />
      <TopResearchSection />
      <NotificationSection />
    </div>
  );
}
