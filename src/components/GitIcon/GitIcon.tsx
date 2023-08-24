import bitbucketIcon from "@/../public/images/logos/bitbucket.svg";
import githubIcon from "@/../public/images/logos/github.svg";
import Image from "next/image";

interface GitIconProps {
  driver: string;
  size: number;
}

const GitIcon = ({ size, driver }: GitIconProps) => {
  let icon = null;

  if (driver == "github") {
    icon = githubIcon;
  } else if (driver == "bitbucket") {
    icon = bitbucketIcon;
  }

  return (
    <Image
      src={icon}
      alt="Github logo"
      width={size}
      height={size}
      className="w-5 h-5"
    />
  );
};

export default GitIcon;
