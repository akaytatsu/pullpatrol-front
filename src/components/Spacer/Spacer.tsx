interface Props {
  size: number;
}

const Spacer = ({ size }: Props) => {
  let dateSize = `h-${size}`;

  return <div className={"w-full " + dateSize}></div>;
};

export default Spacer;
