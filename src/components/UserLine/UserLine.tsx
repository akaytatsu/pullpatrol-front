import { UserCircleIcon } from "@heroicons/react/24/solid";
interface UserLineProps {
  children?: React.ReactNode;
}

const UserLine = ({ children }: UserLineProps) => {
  return (
    <div className="flex flex-row px-2 py-1 bg-blue-200 rounded-md w-max">
      <UserCircleIcon className="w-4 h-4 mr-2" />
      <span className="text-xs">Thiago Freitas</span>
    </div>
  );
};

export default UserLine;
