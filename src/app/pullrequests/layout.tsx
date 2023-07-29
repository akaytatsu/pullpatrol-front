import Menu from "@/components/Menu/Menu";
import Spacer from "@/components/Spacer/Spacer";
import Top from "@/components/Top/Top";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen flex flex-row h-screen bg-[#1D2135]">
      <Menu />
      <div className="bg-[#F6F8FA] w-full rounded-tl-xl flex flex-col mt-1">
        <Top />
        <Spacer size={12} />
        <div className="mx-12">{children}</div>
      </div>
    </div>
  );
}
