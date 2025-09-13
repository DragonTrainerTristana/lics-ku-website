import { ResearchPageContents } from "@/modules/research/details/ResearchPageContents";

const ResearchContentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-[1000px] m-10">
        <ResearchPageContents />
      </div>
    </div>
  );
};

export default ResearchContentPage;
