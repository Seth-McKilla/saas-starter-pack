import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-100">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-stretch justify-start flex-1 text-2xl font-bold cursor-default">
            SSP
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
