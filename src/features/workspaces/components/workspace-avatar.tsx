import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface WorkspaceAvatarProps {
  image?: string;
  name?: string;
  className?: string;
}

export const WorkSpaceAvatar = ({
  image,
  name,
  className,
}: WorkspaceAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("size-10 relative rounded-md overflow-hidden", className)}
      >
        <Image
          src={image}
          alt={name ? name : "user"}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", className)}>
      <AvatarFallback className="text-white-lg bg-blue-600 font-semibold text-lg uppercase rounded-md">
        {name ? name[0] : "U"}
      </AvatarFallback>
    </Avatar>
  );
};
