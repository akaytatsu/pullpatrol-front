import {
  FireIcon,
  SquaresPlusIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import ProgressBar from "../ProgressBar/ProgressBar";

const PRCard = () => {
  return (
    <div className="lg:w-80 md:w-72 sm:w-56 p-6 rounded-2xl bg-white border-gray-300 border flex flex-col shadow">
      <div className="flex flex-row justify-between items-center">
        <div className="h-10 w-10 bg-red-300 rounded-full text-sm flex justify-center items-center">
          <FireIcon className="h-6 w-6 text-black font-light" />
        </div>
        {/* <div className="h-10 w-10 bg-green-300 rounded-full text-sm flex justify-center items-center">
          <SquaresPlusIcon className="h-6 w-6 text-black font-light" />
        </div>
        <div className="h-10 w-10 bg-yellow-300 rounded-full text-sm flex justify-center items-center">
          <SwatchIcon className="h-6 w-6 text-black font-light" />
        </div> */}
        <div className="bg-gray-300 flex justify-center items-center px-3 rounded-md h-6 text-gray-800 text-sm">
          3/589
        </div>
      </div>
      <div className="flex flex-col text-gray-800 mt-5 align-middle justify-center">
        <h2 className="font-bold mb-3 text-gray-800">Add new feature</h2>
        {/* <hr className="h-1 borde-t border-gray-600" /> */}
        <ProgressBar percent={70} />
        <div className="flex flex-row justify-between">
          <span className="mt-2 text-sm text-gray-500">thiagofreitas</span>
          <span className="mt-2 text-sm text-gray-500">16 Jul, 23 - 07:10</span>
        </div>
      </div>
    </div>
  );
};

export default PRCard;
