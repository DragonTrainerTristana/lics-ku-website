import { CONFERENCES } from "@data/publications/conferences";
import {
  DOMESTIC_PATENTS,
  INTERNATIONAL_PATENTS,
} from "@data/publications/patents";
import {
  BOOK_CHAPTERS,
  JOURNAL_PAPERS,
} from "@data/publications/publicationContent";
import Image from "next/image";

const PublicationsPage = () => {
  return (
    <div className="flex flex-col gap-10 px-4 sm:px-12 pb-24 items-center">
      <div className="text-2xl md:text-4xl font-bold bg-blue-950 text-white p-4 text-center w-[100vw] h-24 md:h-54 flex items-center justify-center relative">
        <p className="z-10">Publications</p>
        <Image
          src="/banner.webp"
          alt="publications"
          fill
          className="absolute top-0 left-0 object-cover"
        />
      </div>
      <div className="max-w-[1000px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-bold">Book Chapters</p>
          {BOOK_CHAPTERS.map((chapter, idx) => (
            <PaperList key={idx} text={chapter} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-bold">Journal Papers</p>
          {JOURNAL_PAPERS.map((paper, idx) => (
            <PaperList key={idx + paper.slice(0, 10)} text={paper} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-bold">Conferences</p>
          {CONFERENCES.map((paper, idx) => (
            <PaperList key={idx + paper.slice(0, 10)} text={paper} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-bold">International Patents</p>
          {INTERNATIONAL_PATENTS.map((paper, idx) => (
            <PaperList key={idx + paper.slice(0, 10)} text={paper} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-2xl font-bold">Domestic Patents</p>
          {DOMESTIC_PATENTS.map((paper, idx) => (
            <PaperList key={idx + paper.slice(0, 10)} text={paper} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;

const PaperList = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2">
      • <h4> {text}</h4>
    </div>
  );
};
