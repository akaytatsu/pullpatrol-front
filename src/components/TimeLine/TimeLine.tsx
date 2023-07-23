interface Props {
  max: number;
}

interface LineTimeLineProps {
  label: string;
  max: number;
  current: number;
}

const LineTimeLine = ({ label, max, current }: LineTimeLineProps) => {
  let percent = (current / max) * 100;
  let percentOfSize = ((percent / 100) * 7).toFixed(2).toString();
  const currentDisplay = current > 9 ? "9+" : `0${current}`;

  return (
    <div className="flex flex-col justify-end items-center">
      <div
        style={{ height: `${percentOfSize}rem` }}
        className={`border-r border-gray-400`}
      ></div>
      <div className="mt-2"></div>
      <div className="bg-gray-100 shadow text-xs text-gray-800 py-1 px-2 rounded-full">
        {currentDisplay}
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div>
      <div className="flex flex-row w-full space-x-8 items-baseline">
        <LineTimeLine label="26" max={12} current={7} />
        <LineTimeLine label="27" max={12} current={1} />
        <LineTimeLine label="28" max={12} current={12} />
        <LineTimeLine label="29" max={12} current={3} />
        <LineTimeLine label="31" max={12} current={9} />
      </div>
    </div>
  );
};

export default TimeLine;
