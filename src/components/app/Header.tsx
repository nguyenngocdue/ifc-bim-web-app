import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-lime-500 rounded-full flex justify-center items-center">
          <span className="text-gray-900 font-bold">O</span>
        </div>
        <span className="ml-3 text-lg font-semibold">
          The <span className="text-lime-400">BIM3DM</span>
        </span>
      </div>

      {/* Search Section */}
      <div className="hidden md:flex items-center w-1/2 relative">
        <Input
          type="text"
          placeholder="Search"
          className="bg-gray-800 text-white rounded-full px-4 py-2 placeholder-gray-400 focus:outline-none"
        />
        <kbd className="absolute right-3 top-2 text-gray-400 bg-gray-700 px-2 py-1 rounded text-xs">
          CTRL K
        </kbd>
      </div>

      {/* Profile Section */}
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://via.placeholder.com/40" alt="Profile Picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-white font-medium">John Doe</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="bg-gray-800 text-white w-56 rounded-lg shadow-md">
            <DropdownMenuItem className="hover:bg-gray-700">
              Show Information
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
