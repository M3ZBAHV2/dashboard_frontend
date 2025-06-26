import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample appointment history data matching the uploaded image
const appointmentHistory = [
  {
    id: 1,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "11:00 AM",
    customerName: "Claire Clarke",
    customerPhone: "(500) 543-67",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:15 PM",
  },
  {
    id: 2,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "11:00 PM",
    customerName: "Alice Kessinger",
    customerPhone: "24952912301",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:14 PM",
  },
  {
    id: 3,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "11:15 AM",
    customerName: "Richard Young",
    customerPhone: "340388898",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:14 PM",
  },
  {
    id: 4,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/10/2023",
    appointmentTime: "10:30 AM",
    customerName: "Amanda Hendergram",
    customerPhone: "3176889103",
    dealer: "Navarre Chevrolet & Cadillac",
    createdAt: "01/29/2023 02:15 PM",
  },
  {
    id: 5,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "11:00 AM",
    customerName: "Shekema Sounders",
    customerPhone: "(240) 499-358",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:15 PM",
  },
  {
    id: 6,
    agent: "Admin Admin",
    type: "Follow Up",
    appointmentDate: "10/29/2023",
    appointmentTime: "12:00 PM",
    customerName: "Peyton Durant",
    customerPhone: "99950924",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:20 PM",
  },
  {
    id: 7,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "12:30 PM",
    customerName: "Nancy Brandstetter",
    customerPhone: "(672) 800-9022",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:30 PM",
  },
  {
    id: 8,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "12:00 PM",
    customerName: "Shree Ng",
    customerPhone: "(205) 277-6595",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:30 PM",
  },
  {
    id: 9,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/30/2023",
    appointmentTime: "08:00 PM",
    customerName: "Diametrula Diaz",
    customerPhone: "786-769-1028",
    dealer: "Nissan of San Juan Capistrano",
    createdAt: "01/29/2023 02:50 PM",
  },
  {
    id: 10,
    agent: "Admin Admin",
    type: "Appointment",
    appointmentDate: "10/29/2023",
    appointmentTime: "12:00 PM",
    customerName: "Ashley Yost",
    customerPhone: "(406) 519-4609",
    dealer: "Downtown Toyota",
    createdAt: "01/29/2023 02:53 PM",
  },
];

export default function AppointmentHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("0");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search and agent selection
  const filteredData = appointmentHistory.filter(appointment => {
    const matchesSearch = searchTerm === "" || 
      Object.values(appointment).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesAgent = selectedAgent === "0" || appointment.agent === selectedAgent;
    return matchesSearch && matchesAgent;
  });

  const totalEntries = filteredData.length;
  const startIndex = (currentPage - 1) * parseInt(entriesPerPage);
  const endIndex = Math.min(startIndex + parseInt(entriesPerPage), totalEntries);
  const currentEntries = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalEntries / parseInt(entriesPerPage));

  const getTypeColor = (type: string) => {
    return type === "Follow Up" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Appointment History</CardTitle>
              <div className="text-sm text-gray-500 mt-1">
                Dashboard / Appointment History
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Appointment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filter Section */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Select</SelectItem>
                  <SelectItem value="Admin Admin">Admin Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Input
                placeholder="Search by phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <Select defaultValue="all-dealerships">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-dealerships">Dealership</SelectItem>
                  <SelectItem value="downtown-toyota">Downtown Toyota</SelectItem>
                  <SelectItem value="navarre-chevrolet">Navarre Chevrolet & Cadillac</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select defaultValue="date-range">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-range">Select Date Range to Filter Appointments</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
            
            <div className="relative">
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Data Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-xs font-medium">Agent</TableHead>
                  <TableHead className="text-xs font-medium">Type</TableHead>
                  <TableHead className="text-xs font-medium">Appointment Date</TableHead>
                  <TableHead className="text-xs font-medium">Appointment Time</TableHead>
                  <TableHead className="text-xs font-medium">Customer Name</TableHead>
                  <TableHead className="text-xs font-medium">Customer Phone</TableHead>
                  <TableHead className="text-xs font-medium">Dealer</TableHead>
                  <TableHead className="text-xs font-medium">Created At</TableHead>
                  <TableHead className="text-xs font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentEntries.map((appointment) => (
                  <TableRow key={appointment.id} className="hover:bg-gray-50">
                    <TableCell className="text-sm">{appointment.agent}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(appointment.type)}>
                        {appointment.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{appointment.appointmentDate}</TableCell>
                    <TableCell className="text-sm">{appointment.appointmentTime}</TableCell>
                    <TableCell className="text-sm">{appointment.customerName}</TableCell>
                    <TableCell className="text-sm">{appointment.customerPhone}</TableCell>
                    <TableCell className="text-sm">{appointment.dealer}</TableCell>
                    <TableCell className="text-sm">{appointment.createdAt}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <Button
                    key={pageNum}
                    variant={pageNum === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className={pageNum === currentPage ? "bg-primary text-white" : ""}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}