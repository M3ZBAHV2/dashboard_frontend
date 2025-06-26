import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search } from "lucide-react";

// Sample call history data (empty as shown in the screenshot)
const callHistory: any[] = [];

export default function CallHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>My Call Log History</CardTitle>
              <div className="text-sm text-gray-500 mt-1">
                Dashboard / My Call Log History
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Appointment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
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
                  <TableHead className="text-xs font-medium">Date Time</TableHead>
                  <TableHead className="text-xs font-medium">Direction</TableHead>
                  <TableHead className="text-xs font-medium">From</TableHead>
                  <TableHead className="text-xs font-medium">To</TableHead>
                  <TableHead className="text-xs font-medium">Result</TableHead>
                  <TableHead className="text-xs font-medium">Duration</TableHead>
                  <TableHead className="text-xs font-medium">Dealer Id</TableHead>
                  <TableHead className="text-xs font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {callHistory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                      No data available in table
                    </TableCell>
                  </TableRow>
                ) : (
                  callHistory.map((call, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="text-sm">{call.dateTime}</TableCell>
                      <TableCell className="text-sm">{call.direction}</TableCell>
                      <TableCell className="text-sm">{call.from}</TableCell>
                      <TableCell className="text-sm">{call.to}</TableCell>
                      <TableCell className="text-sm">{call.result}</TableCell>
                      <TableCell className="text-sm">{call.duration}</TableCell>
                      <TableCell className="text-sm">{call.dealerId}</TableCell>
                      <TableCell className="text-sm">{call.action}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="text-sm text-gray-700">
              Showing 0 to 0 of 0 entries
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>

          {/* Progress Bar (as shown in screenshot) */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-400 h-2 rounded-full" style={{ width: "0%" }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}