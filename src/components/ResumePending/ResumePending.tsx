/* eslint-disable @next/next/no-img-element */

import Avatar from "../Avatar/Avatar";

const Divider = () => {
  return <div className="h-0 border-b border-gray-300"></div>;
};

const InsideCard = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row content-center items-center">
        <div className="rounded-full overflow-hidden">
          <Avatar size={12} />
        </div>
        <div className="w-3"></div>
        <div className="flex flex-col">
          <div className="text-black text-lg font-medium">Thiago Freitas</div>
          <div className="text-gray-400 text-sm font-normal">
            akaytatsu/pullprovider-back
          </div>
        </div>
      </div>
      <div className="text-lg">3</div>
    </div>
  );
};

const ResumePending = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-5 text-gray-400">
          <h1 className="text-2xl font-bold text-black">Pending</h1>
        </div>
        <div className="flex bg-gray-200 rounded-xl w-16 h-8 items-center justify-center hover:bg-gray-400 text-sm hover:cursor-pointer">
          <span className="text-gray-800 text-sm font-medium">more</span>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="w-96 p-6 rounded-2xl bg-white border-gray-300 border flex flex-col shadow">
        <div className="grid grid-cols-1 gap-y-8 ">
          <InsideCard />
          <Divider />
          <InsideCard />
          <Divider />
          <InsideCard />
          <Divider />
          <InsideCard />
        </div>
      </div>
    </div>
  );
};

export default ResumePending;
