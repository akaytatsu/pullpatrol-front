import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";

interface MenuProps {
  icon: React.ReactElement;
  text: string;
  routerTo: string;
}

const MenuOption = ({ icon, text, routerTo }: MenuProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center align-middle">
      <div className="w-14 h-14 bg-[#1C2D55] flex justify-center items-center rounded-md hover:bg-[#4E73DB] hover:cursor-pointer">
        <div className="w-7 h-7">{icon}</div>
      </div>
      <div className="w-full mt-1 text-xs text-center">{text}</div>
    </div>
  );
};

export default MenuOption;
