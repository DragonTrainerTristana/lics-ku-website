import Image from "next/image";

export const Logo = ({ hideIcon = false }: { hideIcon?: boolean }) => {
  return (
    <div className="text-2xl font-bold flex items-center gap-2">
      {!hideIcon && <Image src="/logo.png" alt="logo" width={50} height={32} />}
      <span className="text-lg font-bold">LICS@KU</span>
    </div>
  );
};
