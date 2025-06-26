import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Plus } from "lucide-react";

// Sample data matching the uploaded image
const appointmentData = [
  { agent: "Adhron Mohiuddin", totalAppointments: 34, timeSinceLastAppointment: "12 minutes ago" },
  { agent: "Alex Vertus", totalAppointments: 16, timeSinceLastAppointment: "32 minutes ago" },
  { agent: "Amanda Jones", totalAppointments: 20, timeSinceLastAppointment: "2 hours ago" },
  { agent: "Avraham Gonzalez", totalAppointments: 6, timeSinceLastAppointment: "2 minutes ago" },
  { agent: "Ben Thomasini", totalAppointments: 8, timeSinceLastAppointment: "31 minutes ago" },
];

const monthlyAppointmentData = [
  { agent: "Admin Admin", totalAppointments: 42, dailyAverage: 1.62 },
  { agent: "Adhron Mohiuddin", totalAppointments: 657, dailyAverage: 41.06 },
  { agent: "Alex Vertus", totalAppointments: 579, dailyAverage: 22.27 },
  { agent: "Amanda Jones", totalAppointments: 569, dailyAverage: 139.75 },
  { agent: "Avraham Gonzalez", totalAppointments: 338, dailyAverage: 19.88 },
];

const callData = [
  { agent: "Adhron Mohiuddin", totalCalls: 244, lastCallAt: "2025-06-26 15:47:51" },
  { agent: "Alex Vertus", totalCalls: 151, lastCallAt: "2025-06-26 15:43:12" },
  { agent: "Amanda Jones", totalCalls: 247, lastCallAt: "2025-06-26 15:43:50" },
  { agent: "Avraham Gonzalez", totalCalls: 78, lastCallAt: "2025-06-26 15:50:19" },
  { agent: "Deron Changelus", totalCalls: 109, lastCallAt: "2025-06-26 15:51:55" },
];

const monthlyCallData = [
  { agent: "Admin Admin", totalCalls: 6597, dailyAverage: 29.57 },
  { agent: "Alex Vertus", totalCalls: 4993, dailyAverage: 190.4 },
  { agent: "Amanda Jones", totalCalls: 7509, dailyAverage: 242.27 },
  { agent: "Avraham Gonzalez", totalCalls: 6247, dailyAverage: 174.0 },
  { agent: "Daniel Jean-Baptiste", totalCalls: 6384, dailyAverage: 269.13 },
];

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Header with Total Count */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">COMPANY LIFETIME TOTAL APPOINTMENTS : 83095</h2>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <Link href="/appointment/create">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Appointment
          </Button>
        </Link>
      </div>

      {/* Leaderboard Tabs */}
      <Card>
        <CardContent className="p-0">
          <Tabs defaultValue="appointment-leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-none">
              <TabsTrigger value="appointment-leaderboard" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Appointment Leaderboard
              </TabsTrigger>
              <TabsTrigger value="call-leaderboard" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Call Leaderboard
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="appointment-leaderboard" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t">
                {/* Left Side - Current Day */}
                <div className="border-r">
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Total Count : 192</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-gray-600">Appointment</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            <span className="text-sm text-gray-600">Follow Ups</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Select defaultValue="all-department">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-department">All Department</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="text-sm text-gray-500">06/26/2025</div>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-xs font-medium">Agent</TableHead>
                        <TableHead className="text-xs font-medium text-center">Total Appointments</TableHead>
                        <TableHead className="text-xs font-medium text-center">Time since last appointment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointmentData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="text-sm">{row.agent}</TableCell>
                          <TableCell className="text-center text-sm">{row.totalAppointments}</TableCell>
                          <TableCell className="text-center text-sm text-gray-500">{row.timeSinceLastAppointment}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="p-3 border-t bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button size="sm" className="bg-primary text-white">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Monthly */}
                <div>
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Month Total Count : 5730</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-gray-600">Appointment</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            <span className="text-sm text-gray-600">Follow Ups</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Select defaultValue="all-department">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-department">All Department</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="text-sm text-gray-500">June 2025</div>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-xs font-medium">Agent</TableHead>
                        <TableHead className="text-xs font-medium text-center">Total Appointments</TableHead>
                        <TableHead className="text-xs font-medium text-center">Daily Average</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {monthlyAppointmentData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="text-sm">{row.agent}</TableCell>
                          <TableCell className="text-center text-sm">{row.totalAppointments}</TableCell>
                          <TableCell className="text-center text-sm">{row.dailyAverage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="p-3 border-t bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button size="sm" className="bg-primary text-white">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <Button variant="outline" size="sm">4</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="call-leaderboard" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t">
                {/* Left Side - Current Day Calls */}
                <div className="border-r">
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">Total Call Count : 1785</h3>
                    </div>
                    <div className="text-sm text-gray-500">06/26/2025</div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-xs font-medium">Agent</TableHead>
                        <TableHead className="text-xs font-medium text-center">Total Call</TableHead>
                        <TableHead className="text-xs font-medium text-center">Last Call At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {callData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="text-sm">{row.agent}</TableCell>
                          <TableCell className="text-center text-sm">{row.totalCalls}</TableCell>
                          <TableCell className="text-center text-sm text-gray-500">{row.lastCallAt}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="p-3 border-t bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button size="sm" className="bg-primary text-white">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <Button variant="outline" size="sm">4</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Monthly Calls */}
                <div>
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-900">Month Call Total Count : 85641</h3>
                    </div>
                    <div className="text-sm text-gray-500">June 2025</div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-xs font-medium">Agent</TableHead>
                        <TableHead className="text-xs font-medium text-center">Total Calls</TableHead>
                        <TableHead className="text-xs font-medium text-center">Daily Average</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {monthlyCallData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="text-sm">{row.agent}</TableCell>
                          <TableCell className="text-center text-sm">{row.totalCalls}</TableCell>
                          <TableCell className="text-center text-sm">{row.dailyAverage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="p-3 border-t bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">Previous</Button>
                      <Button size="sm" className="bg-primary text-white">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <Button variant="outline" size="sm">4</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
