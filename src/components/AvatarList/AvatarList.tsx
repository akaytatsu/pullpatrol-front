import Avatar from "../Avatar/Avatar";

interface AvatarListProps {
  avatarList: string[];
}

const AvatarList = ({ avatarList }: AvatarListProps) => {
  return (
    <div className="grid justify-center grid-cols-3 gap- place-items-center">
      {avatarList.map((avatar, index) => {
        return <Avatar key={index} border={true} shadow={true} />;
      })}
    </div>
  );
};

export default AvatarList;
