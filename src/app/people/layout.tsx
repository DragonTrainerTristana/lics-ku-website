import { PeopleNavigation } from "@/modules/people/PeopleNavigation";

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-12 py-8 max-w-[1280px] h-full w-full">
        <PeopleNavigation />
        {children}
      </div>
    </div>
  );
}
