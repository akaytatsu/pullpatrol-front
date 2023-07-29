"use client";
import { useUIStore } from "@/store/ui/store";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface SeubMenuItemProps {
  text: string;
  routerTo: string;
}

const SeubMenuItem = ({ text, routerTo }: SeubMenuItemProps) => {
  const router = useRouter();
  const uiState = useUIStore();
  let selected: boolean = routerTo === uiState.actualRoute;

  const handleClick = () => {
    uiState.setActualRoute(routerTo);
    router.push(routerTo);
  };

  const dataClass = twMerge(
    "w-full px-3 py-1 mr-3 text-sm text-black rounded-md hover:cursor-pointer",
    selected ? "bg-sky-100" : "hover:bg-sky-100"
  );

  return (
    <div className={dataClass} onClick={handleClick}>
      {text}
    </div>
  );
};

export default SeubMenuItem;
