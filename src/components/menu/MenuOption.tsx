"use client";

import { useUIStore } from "@/store/ui/store";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  icon: React.ReactElement;
  text: string;
  routerTo: string;
  baseurl?: string;
}

const MenuOption = ({ icon, text, routerTo, baseurl }: MenuProps) => {
  const router = useRouter();
  const uiState = useUIStore();

  let selected: boolean = routerTo === uiState.actualRoute;
  let baseUrl = uiState.actualRoute.split("/")[1] == baseurl;

  const handleClick = () => {
    uiState.setActualRoute(routerTo);
    router.push(routerTo);
  };

  const dataClass = twMerge(
    "w-14 h-14 bg-[#1C2D55] flex justify-center items-center rounded-md hover:cursor-pointer",
    selected || baseUrl ? "bg-[#4E73DB]" : "hover:bg-[#4E73DB]"
  );

  return (
    <div
      className="flex flex-col items-center justify-center text-center align-middle"
      onClick={handleClick}
    >
      <div className={dataClass}>
        <div className="w-7 h-7">{icon}</div>
      </div>
      <div className="w-full mt-1 text-xs text-center">{text}</div>
    </div>
  );
};

export default MenuOption;
