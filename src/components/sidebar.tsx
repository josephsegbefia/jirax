import { Link } from "lucide-react";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
    </div>
  );
};