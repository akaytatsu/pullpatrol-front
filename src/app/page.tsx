import HeaderMe from "@/components/HeaderMe/HeaderMe";
import ResumePRView from "@/components/ResumePRView/ResumePRView";
import ResumePending from "@/components/ResumePending/ResumePending";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <HeaderMe />
        </div>
      </section>
      <section className="flex flex-row self-center max-w-screen-xl">
        <div className="m-16 flex">
          <ResumePRView />
        </div>
        <div className="m-16 flex text-black">
          <ResumePending />
        </div>
      </section>
    </>
  );
}
