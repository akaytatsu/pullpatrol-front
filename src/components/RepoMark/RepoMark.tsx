import Image from "next/image";

interface RepoMarkProps {
  url: string;
}

const RepoMark = ({ url }: RepoMarkProps) => {
  const repoName = url?.split("/").splice(-3)[0];
  const repoOwner = url?.split("/").splice(-4)[0];

  return (
    // <div className="px-2 py-1 text-sm rounded-lg bg-sky-700 w-max">
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Image
          src={"/images/logos/github.png"}
          alt="Github logo"
          width={8}
          height={8}
          className="w-4 h-4 mr-2 rounded-full"
        />
        <div className="text-sm font-semibold text-sky-800">
          {repoOwner}/{repoName}
        </div>
      </div>
    </div>
  );
};

export default RepoMark;
