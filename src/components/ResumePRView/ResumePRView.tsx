import PRCard from "../PRCard/PRCard";

const ResumePRView = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-5 text-gray-400">
          <h1 className="text-2xl font-bold text-black">In Progress</h1>
          <h1 className="text-2xl">Rejected</h1>
          <h1 className="text-2xl">Completed</h1>
        </div>
        <div className="flex bg-gray-200 rounded-xl w-16 h-8 items-center justify-center hover:bg-gray-400 text-sm hover:cursor-pointer">
          <span className="text-gray-800 text-sm font-medium">more</span>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PRCard />
        <PRCard />
        <PRCard />
        <PRCard />
      </div>
    </div>
  );
};

export default ResumePRView;
