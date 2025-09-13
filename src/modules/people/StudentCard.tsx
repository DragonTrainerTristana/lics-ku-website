import Image from "next/image";

import { Card } from "@/components/ui/card";
import { type Student } from "@data/index";
import { StudentLinks } from "./StudentLinks";

export const StudentCard = ({ student }: { student: Student }) => {
  const image = student.image ? student.image : "/people/default_profile.png";
  return (
    <Card className="p-2 md:p-4 hover:scale-101 transition-all duration-300 flex flex-row md:flex-col md:items-center gap-2">
      <Image
        src={image}
        alt={student.name}
        width={150}
        height={150}
        objectFit="cover"
        className="rounded-lg md:rounded-2xl md:w-[300px] md:h-[300px]"
      />
      <StudentLinks student={student} />
    </Card>
  );
};
