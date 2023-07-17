import { UserIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  return (
    <div className="w-full flex flex-row justify-between px-16 py-7 bg-gray-900 border-b-2 border-solid border-gray-600">
      <ul className="flex flex-row space-x-7">
        <li>Home</li>
        <li>Pull Requests</li>
        <li>Pending Actions</li>
        <li>Repositories</li>
        <li>Groups</li>
        <li>Users</li>
      </ul>
      <ul className="flex flex-row space-x-11">
        <li className="flex flex-row">
          <UserIcon className="h-6 w-6 mr-3" />
          Thiago Freitas
        </li>
      </ul>
    </div>
  );
};

export default Menu;
