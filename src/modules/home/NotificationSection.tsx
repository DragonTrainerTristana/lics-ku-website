import { MAIN_ANNOUNCEMENT } from "@data/home/MainAnnouncement";
import { MainAnnouncement } from "@/modules/home/_components/MainAnnouncement";
import NoticeTable from "../notices/NoticeTable";

export const NotificationSection = () => {
  const isDisplayMainAnnouncement =
    MAIN_ANNOUNCEMENT.isDisplayed &&
    MAIN_ANNOUNCEMENT.startDate <= new Date() &&
    MAIN_ANNOUNCEMENT.endDate >= new Date();
  return (
    <div className="flex flex-col justify-center gap-10 px-8 md:px-24 py-10 mb-10 md:mb-40">
      <h3 className=" text-2xl font-bold text-center">공지사항</h3>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12">
        <NoticeTable />
        {isDisplayMainAnnouncement && <MainAnnouncement />}
      </div>
    </div>
  );
};
