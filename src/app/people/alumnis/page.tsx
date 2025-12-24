import { PHDALUMNIS,MSALUMNIS, UNDERGRADUATE_ALUMNIS } from "@data/people/alumnis";
import { AlumniCard } from "@/modules/people/AlumniCard";

const AlumniPage = () => {
  return (
    <div className="flex flex-col gap-10 h-full w-full">
      <div className="flex flex-col gap-8 w-full mb-24">
        <p className="text-2xl font-bold text-center md:text-left">
          Ph.D Alumnis
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PHDALUMNIS.map((alumni, idx) => (
            <AlumniCard key={idx} alumni={alumni} />
          ))}
        </div>
        <p className="text-2xl font-bold text-center md:text-left">
          M.S. Alumnis
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {MSALUMNIS.map((alumni, idx) => (
            <AlumniCard key={idx} alumni={alumni} />
          ))}
        </div>
        <p className="text-2xl font-bold text-center md:text-left">
          Undergraduate Alumnis
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {UNDERGRADUATE_ALUMNIS.map((alumni, idx) => (
            <AlumniCard key={idx} alumni={alumni} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
