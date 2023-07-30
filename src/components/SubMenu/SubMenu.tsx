import SeubMenuItem from "./SubMenuItem";

const SubMenu = () => {
  return (
    <div className="flex flex-col h-full mt-1 text-black bg-white border-r border-gray-300 w-80 rounded-tl-xl">
      <div className="flex flex-col justify-center w-full h-16 bg-white border-b border-gray-300 rounded-tl-xl">
        <span className="px-4 text-lg font-medium">Settings</span>
      </div>
      <div className="w-full px-4 mt-8 space-y-2">
        <SeubMenuItem text="Users" routerTo="/settings/users" />
        <SeubMenuItem text="Repositories" routerTo="/settings/repositories" />
        <SeubMenuItem text="Notifications" routerTo="/settings/notifications" />
      </div>
    </div>
  );
};

export default SubMenu;
