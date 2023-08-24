import githubIcon from "@/../public/images/logos/github.svg";
import Image from "next/image";

interface RepoMarkProps {
  url: string;
}

const RepoMark = ({ url }: RepoMarkProps) => {
  const repoName = url?.split("/").splice(-1)[0];
  const repoOwner = url?.split("/").splice(-2)[0];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Image
          src={githubIcon}
          alt="Github logo"
          width={8}
          height={8}
          className="w-4 h-4 mr-2 rounded-full"
        />
        <div className="text-sm font-semibold text-sky-800">
          {repoOwner}/{repoName.replace(".git", "")}
        </div>
      </div>
    </div>
  );
};

export default RepoMark;
