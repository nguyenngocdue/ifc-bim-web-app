import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSection,
} from "@shadcn/ui";
import { ChevronRight, ChevronDown, User, FileText, Settings, Briefcase, Globe } from "lucide-react";

const CustomSidebar = () => {
  return (
    <Sidebar className="w-64 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <SidebarHeader className="p-4 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-gray-700" />
          <div>
            <p className="text-sm font-medium text-gray-800">Acme Inc</p>
            <p className="text-xs text-gray-500">Enterprise</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Menu Sections */}
      <div className="flex-1 overflow-y-auto">
        <SidebarSection title="Main Menu">
          <SidebarMenu>
            <SidebarMenuItem icon={<Settings />} label="Settings" />
            <SidebarMenuItem
              icon={<FileText />}
              label="Documentation"
              endIcon={<ChevronRight className="h-4 w-4 text-gray-500" />}
            />
            <SidebarMenuItem
              icon={<User />}
              label="Models"
              endIcon={<ChevronDown className="h-4 w-4 text-gray-500" />}
            />
          </SidebarMenu>
        </SidebarSection>

        <SidebarSection title="Projects">
          <SidebarMenu>
            <SidebarMenuItem icon={<Globe />} label="Design Engineering" />
            <SidebarMenuItem icon={<Globe />} label="Sales & Marketing" />
            <SidebarMenuItem icon={<Globe />} label="Travel" />
            <SidebarMenuItem
              icon={<Globe />}
              label="More"
              endIcon={<ChevronRight className="h-4 w-4 text-gray-500" />}
            />
          </SidebarMenu>
        </SidebarSection>
      </div>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-gray-300">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">shadcn</p>
            <p className="text-xs text-gray-500">m@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CustomSidebar;
