import Image from "next/image";
import {
  PROFESSOR_EDUCATION,
  PROFESSOR_EXPERIENCES,
} from "@data/people/professor";

/**
 * Professor Page
 */
const PeoplePage = () => {
  return (
    <div className="flex flex-col gap-10 h-full w-full">
      <div className="flex flex-col md:flex-row gap-10 w-full items-center w-full">
        <Image
          src={"/people/professor.jpg"}
          alt="professor"
          width={200}
          height={300}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between h-full w-full gap-4">
          <div className="flex w-full flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold">Sang Hyun Lee</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Associate Professor
            </p>
          </div>
          <div className="flex w-full flex-col items-center md:items-start">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              Korea University Engineering Bldg. #407
              <br />
              (TEL) +82-2-3290-3218
              <br />
              (FAX) +82-2-921-0544
              <br />
              sanghyunlee@korea.ac.kr
              <br />
              School of Electrical Engineering
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full mb-24 px-4 md:px-0">
        <p className="text-2xl font-bold">Experiences</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {PROFESSOR_EXPERIENCES.map((experience) => (
              <div className="flex gap-4 " key={experience.title}>
                <p className="text-sm md:text-base whitespace-pre-line">
                  •&nbsp;
                  <span className="text-xs text-blue-800 dark:text-blue-300">
                    {experience.date}
                  </span>
                  &nbsp;&nbsp;{experience.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-bold">Education</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {PROFESSOR_EDUCATION.map((education) => (
              <div className="flex gap-4" key={education.title}>
                <p className="text-sm md:text-base">
                  •&nbsp;
                  <span className="text-xs text-blue-800 dark:text-blue-300">
                    {education.date}
                  </span>
                  &nbsp;&nbsp;
                  {education.title},&nbsp;
                  {education.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
