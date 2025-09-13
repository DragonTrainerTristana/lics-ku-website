import {
  MASTER_STUDENTS,
  PHD_STUDENTS,
  UNDERGRADUATE_STUDENTS,
  Student,
} from "@data/index";
import { StudentCard } from "@/modules/people/StudentCard";

const StudentsPage = () => {
  return (
    <div className="flex flex-col gap-24 h-full w-full">
      {PHD_STUDENTS.length > 0 && (
        <StudentGrid title="Ph.D. Candidates" students={PHD_STUDENTS} />
      )}
      {MASTER_STUDENTS.length > 0 && (
        <StudentGrid title="Masters Candidates" students={MASTER_STUDENTS} />
      )}
      {UNDERGRADUATE_STUDENTS.length > 0 && (
        <StudentGrid
          title="Undergraduate Students"
          students={UNDERGRADUATE_STUDENTS}
        />
      )}
    </div>
  );
};

export default StudentsPage;

const StudentGrid = ({
  title,
  students,
}: {
  title: string;
  students: Student[];
}) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <p className="text-2xl font-bold text-center md:text-left">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, idx) => (
          <StudentCard key={idx} student={student} />
        ))}
      </div>
    </div>
  );
};
