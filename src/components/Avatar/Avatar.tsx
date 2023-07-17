interface Props {
  size?: number;
}

const Avatar = ({ size }: Props) => {
  if (!size) size = 12;

  let sizeData = `w-${size} h-${size}`;

  return (
    <div className={sizeData + " rounded-full overflow-hidden"}>
      <img
        src="https://avatars.githubusercontent.com/u/2520440?s=400&u=c9cb8d019eb2d949477e0dcad3bbe2fff76d3e92&v=4"
        className={sizeData + " rounded-full"}
      />
    </div>
  );
};

export default Avatar;
