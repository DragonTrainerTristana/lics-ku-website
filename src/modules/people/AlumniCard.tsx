import Image from "next/image";
import { type Alumni } from "@data/index";
import { AlumniLink } from "./AlumniLink";

export const AlumniCard = ({ alumni }: { alumni: Alumni }) => {
  const hasWebsite = alumni.website !== undefined;

  const image = alumni.image ? alumni.image : "/people/default_profile.png";
  return (
    <div
      className={`p-4 hover:scale-101 transition-all duration-300 flex flex-row gap-4 ${
        hasWebsite ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <Image
        src={image}
        alt={alumni.name}
        width={150}
        height={150}
        objectFit="cover"
        className="rounded-lg md:rounded-2xl md:w-[200px] md:h-[200px]"
      />
      <AlumniLink alumni={alumni} />
    </div>
  );
};
