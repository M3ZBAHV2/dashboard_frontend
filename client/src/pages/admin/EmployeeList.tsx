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

const initialEmployees = [
  {
    id: 1,
    name: "Admin Admin",
    email: "manager@truebdc.com",
    phone: "+8583282889",
    status: true,
  },
  {
    id: 5,
    name: "Rafael Hossain",
    email: "rafael@truebdc.com",
    phone: "+57379428950",
    status: false,
  },
  {
    id: 6,
    name: "Maria Morozova",
    email: "maria@truebdc.com",
    phone: "+57304387171",
    status: true,
  },
];

export default function EmployeeList() {
  const [employees, setEmployees] = useState(initialEmployees);

  const toggleStatus = (id: number) => {
    setEmployees(prev => prev.map(employee => 
      employee.id === id 
        ? { ...employee, status: !employee.status }
        : employee
    ));
  };

  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    {
      key: "status",
      label: "Status",
      render: (value: boolean, row: any) => (
        <StatusToggle
          checked={value}
          onCheckedChange={() => toggleStatus(row.id)}
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
            <DropdownMenuItem>Schedule</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={employees}
      searchPlaceholder="Search employees..."
      addButtonLabel="Add Employee"
      onAdd={() => console.log("Add employee")}
    />
  );
}
