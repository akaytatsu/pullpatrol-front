import {
  ArrowDownOnSquareIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import MenuOption from "./MenuOption";

const Menu = () => {
  return (
    <div className="w-28 flex flex-col h-screen justify-start items-center space-y-7 bg-gradient-to-b from-[#1D2135] to-[#263A50] pt-7">
      <MenuOption
        icon={<ArrowDownOnSquareIcon />}
        text="pullrequests"
        routerTo="/pullrequests"
      />
      <MenuOption
        icon={<Cog6ToothIcon />}
        text="settings"
        routerTo="/settings/repositories"
        baseurl="settings"
      />
    </div>
  );
};

export default Menu;

// <div className="flex flex-row justify-between w-full px-16 bg-gray-900 border-b-2 border-gray-600 border-solid py-7">
//   <ul className="flex flex-row space-x-7">
//     <li>Home</li>
//     <li>Pull Requests</li>
//     <li>Pending Actions</li>
//     <li>Repositories</li>
//     <li>Groups</li>
//     <li>Users</li>
//   </ul>
//   <ul className="flex flex-row space-x-11">
//     <li className="flex flex-row">
//       <UserIcon className="w-6 h-6 mr-3" />
//       Thiago Freitas
//     </li>
//   </ul>
// </div>
