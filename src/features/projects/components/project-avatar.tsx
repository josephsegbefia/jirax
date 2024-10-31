import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProjectAvatarProps {
  image?: string;
  name?: string;
  className?: string;
  fallbackClassName?: string;
}

export const ProjectAvatar = ({
  image,
  name,
  className,
  fallbackClassName,
}: ProjectAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("size-5 relative rounded-md overflow-hidden", className)}
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
    <Avatar className={cn("size-5 rounded-md", className)}>
      <AvatarFallback
        className={cn(
          "text-white-lg bg-blue-600 font-semibold text-sm uppercase rounded-md",
          fallbackClassName
        )}
      >
        {name ? name[0] : "U"}
      </AvatarFallback>
    </Avatar>
  );
};
