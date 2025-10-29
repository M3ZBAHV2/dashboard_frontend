import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Dealership {
  id: number;
  name: string;
  email: string;
  showCallLogs: boolean;
  status: boolean;
  assignedDealers?: string[];
}

const initialDealerships: Dealership[] = [
  { id: 4, name: "Downtown Auto Center", email: "Fzalmy@downtownautocenter.com", showCallLogs: false, status: true, assignedDealers: ["Downtown Toyota", "Downtown Subaru"] },
  { id: 5, name: "BMW MINI of Sterling", email: "julius.green@bmwofsterling.com", showCallLogs: false, status: true },
  { id: 6, name: "Creative Automotive Mailing", email: "camus.zunelli@yahoo.com", showCallLogs: false, status: true },
  { id: 10, name: "Daytona Kia & Mitsubishi", email: "jerome@daytonakia.com", showCallLogs: false, status: true },
  { id: 11, name: "Sutherlin Nissan of Orlando", email: "BurkeAutomotiveMarketing@gmail.com", showCallLogs: false, status: true },
  { id: 12, name: "Koons Automotive of Woodbridge", email: "davidszky778@gmail.com", showCallLogs: false, status: true },
  { id: 13, name: "New Direct CDJR", email: "wefthomas2034@gmail.com", showCallLogs: false, status: true },
  { id: 14, name: "Gostel Toyota of Bradenton", email: "Sandra@theenlvd.com", showCallLogs: false, status: true },
  { id: 15, name: "MBI Direct Mail", email: "edimolasb@mbidirectmail.com", showCallLogs: false, status: true },
  { id: 16, name: "Garden State Honda", email: "n.delgadico@gardenstatenla.com", showCallLogs: false, status: true },
];

export default function DealershipLogins() {
  const [, setLocation] = useLocation();
  const [dealerships, setDealerships] = useState<Dealership[]>(initialDealerships);
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleStatus = (id: number, field: 'status' | 'showCallLogs') => {
    setDealerships(prev => prev.map(dealership => 
      dealership.id === id 
        ? { ...dealership, [field]: !dealership[field] }
        : dealership
    ));
  };

  const handleEdit = (id: number) => {
    setLocation(`/admin/dealerships/${id}/edit`);
  };

  const handleDelete = (id: number) => {
    setDealerships(prev => prev.filter(dealership => dealership.id !== id));
  };

  // Filter dealerships based on search
  const filteredDealerships = dealerships.filter(dealership =>
    dealership.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealership.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredDealerships.length / parseInt(entriesPerPage));
  const startIndex = (currentPage - 1) * parseInt(entriesPerPage);
  const endIndex = startIndex + parseInt(entriesPerPage);
  const currentDealerships = filteredDealerships.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Dealership List</CardTitle>
              <div className="text-sm text-gray-500 mt-1">
                Dashboard / Dealership List
              </div>
            </div>
            <Button 
              onClick={() => setLocation('/admin/dealerships/create')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              data-testid="button-add-dealership"
            >
              <Plus className="h-4 w-4 mr-2" />
              Dealership
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">Show</span>
                <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                  <SelectTrigger className="w-20" data-testid="select-entries">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm">entries</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm">Search:</span>
                <Input
                  placeholder=""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                  data-testid="input-search"
                />
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">#</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Email</TableHead>
                    <TableHead className="font-semibold">Show Call Logs</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDealerships.map((dealership) => (
                    <TableRow key={dealership.id}>
                      <TableCell className="text-sm">{dealership.id}</TableCell>
                      <TableCell className="text-sm">{dealership.name}</TableCell>
                      <TableCell className="text-sm">{dealership.email}</TableCell>
                      <TableCell>
                        <Switch
                          checked={dealership.showCallLogs}
                          onCheckedChange={() => toggleStatus(dealership.id, 'showCallLogs')}
                          data-testid={`switch-show-call-logs-${dealership.id}`}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={dealership.status}
                          onCheckedChange={() => toggleStatus(dealership.id, 'status')}
                          data-testid={`switch-status-${dealership.id}`}
                        />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="h-8 w-8 p-0"
                              data-testid={`button-action-${dealership.id}`}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem 
                              onClick={() => handleEdit(dealership.id)}
                              data-testid={`action-edit-${dealership.id}`}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDelete(dealership.id)}
                              data-testid={`action-delete-${dealership.id}`}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredDealerships.length)} of {filteredDealerships.length} entries
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  data-testid="button-previous"
                >
                  Previous
                </Button>
                
                <Button
                  variant="default"
                  size="sm"
                  className="bg-blue-600 text-white"
                  data-testid={`button-page-${currentPage}`}
                >
                  {currentPage}
                </Button>
                
                {currentPage === 1 && totalPages > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(2)}
                  >
                    2
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="button-next"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
