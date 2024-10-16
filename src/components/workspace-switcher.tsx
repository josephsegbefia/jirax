"use client";
import { useGetWorkSpaces } from "@/features/workspaces/api/use-get-workspaces";
import { RiAddCircleFill } from "react-icons/ri";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const WorkspaceSwitcher = () => {
  const { data: workspaces } = useGetWorkSpaces();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill className="size-5 text-neutral-500 curser-pointer hover:opacity-75 transition" />
      </div>
      <Select>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No work space selected" />
          <SelectContent>
            {workspaces?.documents.map((workspace) => (
              <SelectItem key={workspace.$id} value={workspace.$id}>
                {workspace.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
};
