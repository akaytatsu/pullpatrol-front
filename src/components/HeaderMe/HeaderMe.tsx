import {
  CheckCircleIcon,
  XCircleIcon,
  SquaresPlusIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import Avatar from "../Avatar/Avatar";
import ProgressBar from "../ProgressBar/ProgressBar";
import Spacer from "../Spacer/Spacer";
import TimeLine from "../TimeLine/TimeLine";

interface CounterProps {
  number: number;
  icon: any;
  text: string;
}

const MyData = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Avatar size={12} />
        <div className="ml-3">
          <div className="text-white">Thiago Freitas</div>
          <div className="text-sm text-gray-400">akaytatsu</div>
        </div>
      </div>
      <Spacer />
      <ProgressBar percent={70} />
      <Spacer />
      <div className="text-sm">
        <b>70%</b> completed
      </div>
    </div>
  );
};

const Counter = ({ number, icon, text }: CounterProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center">
        <div className="flex rounded-full w-12 h-12 bg-gray-700 items-center justify-center">
          {/* */}
          {icon}
        </div>
        <div className="flex flex-col ">
          <span className="text-white text-2xl ml-4">{number}</span>
          <span className="text-gray-400 text-sm ml-4">{text}</span>
        </div>
      </div>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="grid grid-cols-2 gap-x-20 gap-y-7">
      <Counter
        icon={<CheckCircleIcon className="w-7 h-7 text-green-500" />}
        number={72}
        text="approved"
      />
      <Counter
        icon={<XCircleIcon className="w-7 h-7 text-red-500" />}
        number={8}
        text="reproved"
      />
      <Counter
        icon={<SquaresPlusIcon className="w-7 h-7 text-yellow-500" />}
        number={3}
        text="pending"
      />
      <Counter
        icon={<RectangleGroupIcon className="w-7 h-7 text-blue-500" />}
        number={86}
        text="total pr"
      />
    </div>
  );
};

const HeaderMe = () => {
  return (
    <div className="max-w-screen-xl p-8 justify-center items-center">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold mb-6">my resume</span>
          <div className="flex flex-row justify-between items-center space-x-16">
            <MyData />
            <Counters />
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMe;
