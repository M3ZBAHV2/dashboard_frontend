import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Activity } from "lucide-react";

// Sample agents data
const agents = [
  "Aqenda",
  "Aqland Handout",
  "Adel Razzaq",
  "Artemis",
  "Ashton Mohiuddin",
  "Alex Quince",
];

export default function RCAgentActivity() {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [dateRange, setDateRange] = useState("");

  // Empty data as shown in the screenshot
  const activityData: any[] = [];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            <div>
              <CardTitle>RC - Agent Activity</CardTitle>
              <div className="text-sm text-gray-500 mt-1">
                Dashboard / RC - Agent Activity
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Agent Selection */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Agents</h3>
                <div className="border rounded-lg max-h-64 overflow-y-auto">
                  <div className="p-3 space-y-2">
                    {agents.map((agent, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded cursor-pointer transition-colors ${
                          selectedAgent === agent
                            ? "bg-orange-100 text-orange-800"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedAgent(agent)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">{agent}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Date Range to Filter Appointments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right Side - Activity Table */}
            <div className="space-y-4">
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-xs font-medium">Time Active</TableHead>
                      <TableHead className="text-xs font-medium text-center">10 Minutes Gap</TableHead>
                      <TableHead className="text-xs font-medium text-center">15 Min + Gap</TableHead>
                      <TableHead className="text-xs font-medium text-center">5-10 Min + Gap</TableHead>
                      <TableHead className="text-xs font-medium text-center">Total Gap</TableHead>
                      <TableHead className="text-xs font-medium text-center">On Phone</TableHead>
                      <TableHead className="text-xs font-medium text-center">Off Phone</TableHead>
                      <TableHead className="text-xs font-medium text-center">Total Calls</TableHead>
                      <TableHead className="text-xs font-medium text-center">Call Gaps</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                          Please select Agent and Date Range to see User's Log
                        </TableCell>
                      </TableRow>
                    ) : (
                      activityData.map((activity, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="text-sm">{activity.timeActive}</TableCell>
                          <TableCell className="text-center text-sm">{activity.tenMinGap}</TableCell>
                          <TableCell className="text-center text-sm">{activity.fifteenMinGap}</TableCell>
                          <TableCell className="text-center text-sm">{activity.fiveToTenGap}</TableCell>
                          <TableCell className="text-center text-sm">{activity.totalGap}</TableCell>
                          <TableCell className="text-center text-sm">{activity.onPhone}</TableCell>
                          <TableCell className="text-center text-sm">{activity.offPhone}</TableCell>
                          <TableCell className="text-center text-sm">{activity.totalCalls}</TableCell>
                          <TableCell className="text-center text-sm">{activity.callGaps}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
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