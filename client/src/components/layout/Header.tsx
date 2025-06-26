import { Button } from "@/components/ui/button";
import { Bell, Menu, ChevronDown, User } from "lucide-react";
import { useLocation } from "wouter";

interface HeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  "/": "Leaderboard",
  "/dealer-info": "Dealer Info",
  "/dealer-notification": "Dealer Notification",
  "/admin/dealer-list": "Dealer List",
  "/admin/employee-list": "Employee List",
  "/admin/department-list": "Department List",
  "/admin/scenario-list": "Scenario List",
  "/admin/lead-source": "Lead Source List",
  "/admin/dealership-logins": "Dealership List",
  "/admin/role-permission": "Role List",
  "/admin/sms-logs": "Appointment Sms Logs",
  "/admin/pending-sms": "Pending Sms",
  "/settings/general": "General Settings",
};

export default function Header({ onMenuClick }: HeaderProps) {
  const [location] = useLocation();
  const title = pageTitles[location] || "Dashboard";

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            <div className="text-sm text-gray-500">
              <span>Dashboard</span>
              <span className="mx-1">/</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4 text-gray-400" />
          </Button>
          <div className="flex items-center space-x-2 cursor-pointer">
            <User className="h-5 w-5 text-gray-400" />
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
