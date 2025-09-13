"use client";

import { type Student } from "@data/index";
import {
  Check,
  CopyIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
} from "lucide-react";
import { toast } from "sonner";

export const StudentLinks = ({ student }: { student: Student }) => {
  const copyEmail = () => {
    if (!student.email) return;
    navigator.clipboard.writeText(student.email);
    toast("Email copied to clipboard", {
      description: student.email,
      icon: <Check className="w-3 h-3" />,
    });
  };
  return (
    <div className="flex flex-col justify-between py-2 md:p-0 h-full md:h-[100px]">
      <div className="flex flex-col">
        <p className="text-lg font-bold text-left md:text-center">
          {student.name}
        </p>
        {student.email && (
          <div
            className="flex gap-2 items-center cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={copyEmail}
          >
            <p className="text-sm">{student.email}</p>
            <CopyIcon className="w-3 h-3" />
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-start md:justify-center">
        {student.github && (
          <GithubIcon
            onClick={() => window.open(student.github, "_blank")}
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-300"
          />
        )}
        {student.linkedin && (
          <LinkedinIcon
            onClick={() => window.open(student.linkedin, "_blank")}
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-300"
          />
        )}
        {student.website && (
          <GlobeIcon
            onClick={() => window.open(student.website, "_blank")}
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-300"
          />
        )}
      </div>
    </div>
  );
};
