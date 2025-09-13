import { RESEARCH_LIST } from "@data/research/ResearchList";
import { HashScroller } from "@/modules/research/_utils/HashScroller";
import { ResearchCard } from "@/modules/research/display/ResearchCard";

const ResearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-24">
      <HashScroller />
      <div className="flex flex-col gap-10 px-4 md:px-12 py-8 max-w-[1200px]">
        <p className=" text-2xl font-bold text-center">Research</p>
        {RESEARCH_LIST.map((research) => {
          return (
            <ResearchCard
              key={research.id}
              research={research}
              id={research.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResearchPage;
