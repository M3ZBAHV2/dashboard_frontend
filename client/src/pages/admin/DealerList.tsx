import { useState } from "react";
import DataTable from "@/components/common/DataTable";
import StatusToggle from "@/components/common/StatusToggle";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialDealers = [
  {
    id: 5,
    name: "Downtown Auto Center",
    email: "f.salm@downtownautocenter.com",
    showCallLogs: false,
    status: true,
  },
  {
    id: 8,
    name: "BMW MINI of Sterling",
    email: "julius.green@bmwsterling.com",
    showCallLogs: false,
    status: true,
  },
  {
    id: 9,
    name: "Creative Automotive Marketing",
    email: "contact@creativeautomotive.com",
    showCallLogs: true,
    status: false,
  },
  {
    id: 10,
    name: "Daytona Kia & Mitsubishi",
    email: "jerome@daytonakia.com",
    showCallLogs: false,
    status: true,
  },
  {
    id: 11,
    name: "Sutherlin Nissan of Orlando",
    email: "brunswick@sutherlinnetwork@gmail.com",
    showCallLogs: false,
    status: true,
  },
];

export default function DealerList() {
  const [dealers, setDealers] = useState(initialDealers);

  const toggleStatus = (id: number, field: 'status' | 'showCallLogs') => {
    setDealers(prev => prev.map(dealer => 
      dealer.id === id 
        ? { ...dealer, [field]: !dealer[field] }
        : dealer
    ));
  };

  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "showCallLogs",
      label: "Show Call Logs",
      render: (value: boolean, row: any) => (
        <StatusToggle
          checked={value}
          onCheckedChange={() => toggleStatus(row.id, 'showCallLogs')}
        />
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value: boolean, row: any) => (
        <StatusToggle
          checked={value}
          onCheckedChange={() => toggleStatus(row.id, 'status')}
        />
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (_: any, row: any) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={dealers}
      searchPlaceholder="Search dealers..."
      showAddButton={false}
    />
  );
}
