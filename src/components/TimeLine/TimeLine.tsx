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

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        style={{ height: `${percentOfSize}rem` }}
        className={`border-r border-gray-400`}
      ></div>
      <div className="pt-4">{label}</div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div>
      <div className="flex flex-row w-full space-x-6 items-baseline">
        <LineTimeLine label="S" max={12} current={9} />
        <LineTimeLine label="S" max={12} current={3} />
        <LineTimeLine label="S" max={12} current={12} />
      </div>
    </div>
  );
};

export default TimeLine;
