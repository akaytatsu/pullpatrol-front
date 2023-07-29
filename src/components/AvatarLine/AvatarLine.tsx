import Avatar from "../Avatar/Avatar";

interface AvatarLineProps {}

const AvatarLine = (props: AvatarLineProps) => {
  return (
    <div className="flex flex-row items-center justify-center space-y-2 bg-gray-200 rounded-md space-x-7 h-7 w-max">
      Thiago Freitas
    </div>
  );
};

export default AvatarLine;
