interface ProgressBarProps {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="w-full h-1 bg-gray-300">
      <div className="h-full bg-green-600" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
