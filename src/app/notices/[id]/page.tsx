import { NoticePageContents } from "@/modules/notices/details/NoticePageContents";

const NoticeContentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-[1000px] m-10">
        <NoticePageContents />
      </div>
    </div>
  );
};

export default NoticeContentPage;
