import { twMerge } from "tailwind-merge";

interface AvatarProps {
  size?: number;
  border?: boolean;
  shadow?: boolean;
  className?: string;
}

const Avatar = ({
  size,
  border = false,
  shadow = false,
  className,
}: AvatarProps) => {
  if (!size) size = 12;

  let sizeData = `w-${size} h-${size}`;
  let borderData = border ? "border-2 border-white" : "";
  let shadowData = shadow ? "shadow" : "";

  const classData = twMerge(
    sizeData,
    "rounded-full",
    borderData,
    shadowData,
    className
  );

  return (
    <div className={sizeData + " rounded-full overflow-hidden"}>
      <img
        src="https://avatars.githubusercontent.com/u/2520440?s=400&u=c9cb8d019eb2d949477e0dcad3bbe2fff76d3e92&v=4"
        className={classData}
      />
    </div>
  );
};

export default Avatar;
