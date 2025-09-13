export type PeopleType = "professor" | "alumnis" | "students";
export const PEOPLE_TYPE_LIST: PeopleType[] = [
  "professor",
  "students",
  "alumnis",
];

export type Alumni = {
  image?: string;
  name: string;
  website?: string;
  field?: string;
};

export type Student = {
  image?: string;
  name: string;
  email?: string;
  github?: string;
  linkedin?: string;
  website?: string;
};
