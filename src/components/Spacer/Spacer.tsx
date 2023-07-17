interface Props {
  size?: number;
}

const Spacer = ({ size }: Props) => {
  if (!size) size = 4;

  let dateSize = `h-${size}`;

  return <div className={"w-full " + dateSize}></div>;
};

export default Spacer;
