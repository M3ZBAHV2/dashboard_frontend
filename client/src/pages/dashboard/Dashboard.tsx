import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Building2, CalendarCheck, CalendarDays } from "lucide-react";

export default function Dashboard() {
  const [todayAgentDate, setTodayAgentDate] = useState("10/28/2025");
  const [todayDealerDate, setTodayDealerDate] = useState("10/28/2025");
  const [todayAgentDeptDate, setTodayAgentDeptDate] = useState("10/28/2025");
  const [todayDealerDeptDate, setTodayDealerDeptDate] = useState("10/28/2025");
  const [mtdAgentMonth, setMtdAgentMonth] = useState("October 2025");
  const [mtdDealerMonth, setMtdDealerMonth] = useState("October 2025");
  const [ringCentralDate, setRingCentralDate] = useState("10/28/2025");

  // Summary stats matching the screenshot
  const summaryStats = [
    { title: "Total Employees", value: "91", icon: <Users className="h-6 w-6" />, color: "bg-yellow-100 text-yellow-600" },
    { title: "Total Dealers", value: "0/1", icon: <Building2 className="h-6 w-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Today Appointments", value: "0", icon: <CalendarCheck className="h-6 w-6" />, color: "bg-green-100 text-green-600" },
    { title: "Month Appointments", value: "5488", icon: <CalendarDays className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
    { title: "Appt. For Today", value: "0", icon: <CalendarCheck className="h-6 w-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Appt. For Tomorrow", value: "0", icon: <CalendarCheck className="h-6 w-6" />, color: "bg-green-100 text-green-600" },
    { title: "Appt. for 3rd day", value: "0", icon: <CalendarDays className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
    { title: "Appt. for 4th day", value: "0", icon: <CalendarDays className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
  ];

  // Sample data matching screenshot
  const todayAgentStats = [
    { agent: "Adrian Mclaughlin", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { agent: "Alex Willhite", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { agent: "Amanda Jones", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { agent: "Andrea Rivera", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { agent: "Ben Thomassen", apts_today: 0, last_apt: 0, hourly_avg: 0 },
  ];

  const todayDealerStats = [
    { dealer: "Augusta Mitsubishi", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { dealer: "Daytona Kia", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { dealer: "Daytona Mitsubishi", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { dealer: "Downtown Subaru", apts_today: 0, last_apt: 0, hourly_avg: 0 },
    { dealer: "Downtown Toyota", apts_today: 0, last_apt: 0, hourly_avg: 0 },
  ];

  const todayAgentDeptStats = [
    { agent: "Adrian Mclaughlin", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Alex Willhite", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Amanda Jones", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Andrea Rivera", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Ben Thomassen", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
  ];

  const todayDealerDeptStats = [
    { dealer: "Augusta Mitsubishi", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Daytona Kia", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Daytona Mitsubishi", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Downtown Subaru", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Downtown Toyota", apts: 0, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
  ];

  const mtdAgentStats = [
    { agent: "Adrian Mclaughlin", total_apts: 716, mid_avg: 38.76, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 189, sales: 0 },
    { agent: "Alex Willhite", total_apts: 262, mid_avg: 10.07, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Amanda Jones", total_apts: 514, mid_avg: 18.45, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
    { agent: "Andrea Rivera", total_apts: 181, mid_avg: 16.1, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 35, sales: 0 },
    { agent: "Ben Thomassen", total_apts: 296, mid_avg: 13.77, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
  ];

  const mtdDealerStats = [
    { dealer: "Augusta Mitsubishi", total_apts: 253, daily_avg: 8.35, campaigns: 0, confirmations: 0, data_mining: 3, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Daytona Kia", total_apts: 330, daily_avg: 11.03, campaigns: 0, confirmations: 0, data_mining: 3, follow_up: 0, sms: 0, sales: 0 },
    { dealer: "Daytona Mitsubishi", total_apts: 906, daily_avg: 30, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 2 },
    { dealer: "Downtown Subaru", total_apts: 81, daily_avg: 2.84, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 3 },
    { dealer: "Downtown Toyota", total_apts: 184, daily_avg: 7.9, campaigns: 0, confirmations: 0, data_mining: 0, follow_up: 0, sms: 0, sales: 0 },
  ];

  const ringCentralStats = [
    { agent: "Adrian Mclaughlin", today_calls: 0, month_calls: 1896, avg_daily: 309.76 },
    { agent: "Alex Willhite", today_calls: 0, month_calls: 4246, avg_daily: 293.52 },
    { agent: "Amanda Jones", today_calls: 0, month_calls: 7545, avg_daily: 288.25 },
    { agent: "Dawn Gallagher", today_calls: 0, month_calls: 5820, avg_daily: 216.1 },
    { agent: "Jeremy Mark", today_calls: 0, month_calls: 5516, avg_daily: 392.7 },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Summary Cards - Numbers above icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat, index) => (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-xs font-medium text-gray-600">{stat.title}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today - Agent Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Today - Agent Stats</h3>
          <Input
            value={todayAgentDate}
            onChange={(e) => setTodayAgentDate(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-today-agent-date"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Agent ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Apts. Today ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Last Apt. ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Hourly Avg. Apts ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todayAgentStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.agent}</TableCell>
                        <TableCell className="text-xs py-3">{row.apts_today}</TableCell>
                        <TableCell className="text-xs py-3">{row.last_apt}</TableCell>
                        <TableCell className="text-xs py-3">{row.hourly_avg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today - Dealer Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Today - Dealer Stats</h3>
          <Input
            value={todayDealerDate}
            onChange={(e) => setTodayDealerDate(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-today-dealer-date"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Dealer ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Apts. Today ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Last Apt. ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Hourly Avg. Apts ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todayDealerStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.dealer}</TableCell>
                        <TableCell className="text-xs py-3">{row.apts_today}</TableCell>
                        <TableCell className="text-xs py-3">{row.last_apt}</TableCell>
                        <TableCell className="text-xs py-3">{row.hourly_avg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today - Agent Stats By Department */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Today - Agent Stats By Department</h3>
          <Input
            value={todayAgentDeptDate}
            onChange={(e) => setTodayAgentDeptDate(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-today-agent-dept-date"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Agent ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Apts. ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Campaign ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Confirmations ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Data Mining ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Follow Up ↑</TableHead>
                      <TableHead className="text-xs font-semibold">SMS ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Sa... ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todayAgentDeptStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.agent}</TableCell>
                        <TableCell className="text-xs py-3">{row.apts}</TableCell>
                        <TableCell className="text-xs py-3">{row.campaigns}</TableCell>
                        <TableCell className="text-xs py-3">{row.confirmations}</TableCell>
                        <TableCell className="text-xs py-3">{row.data_mining}</TableCell>
                        <TableCell className="text-xs py-3">{row.follow_up}</TableCell>
                        <TableCell className="text-xs py-3">{row.sms}</TableCell>
                        <TableCell className="text-xs py-3">{row.sales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today - Dealer Stats By Department */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Today - Dealer Stats By Department</h3>
          <Input
            value={todayDealerDeptDate}
            onChange={(e) => setTodayDealerDeptDate(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-today-dealer-dept-date"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Dealer ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Apts. ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Campaign ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Confirmations ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Data Mining ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Follow... ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Sm... ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Sa... ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todayDealerDeptStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.dealer}</TableCell>
                        <TableCell className="text-xs py-3">{row.apts}</TableCell>
                        <TableCell className="text-xs py-3">{row.campaigns}</TableCell>
                        <TableCell className="text-xs py-3">{row.confirmations}</TableCell>
                        <TableCell className="text-xs py-3">{row.data_mining}</TableCell>
                        <TableCell className="text-xs py-3">{row.follow_up}</TableCell>
                        <TableCell className="text-xs py-3">{row.sms}</TableCell>
                        <TableCell className="text-xs py-3">{row.sales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MTD - Agent Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">MTD - Agent Stats</h3>
          <Input
            value={mtdAgentMonth}
            onChange={(e) => setMtdAgentMonth(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-mtd-agent-month"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Agent ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Total Apts ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Mid Avg ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Campaign ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Confirmations ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Data Mining ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Follow Up ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mtdAgentStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.agent}</TableCell>
                        <TableCell className="text-xs py-3">{row.total_apts}</TableCell>
                        <TableCell className="text-xs py-3">{row.mid_avg}</TableCell>
                        <TableCell className="text-xs py-3">{row.campaigns}</TableCell>
                        <TableCell className="text-xs py-3">{row.confirmations}</TableCell>
                        <TableCell className="text-xs py-3">{row.data_mining}</TableCell>
                        <TableCell className="text-xs py-3">{row.follow_up}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MTD - Dealer Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">MTD - Dealer Stats</h3>
          <Input
            value={mtdDealerMonth}
            onChange={(e) => setMtdDealerMonth(e.target.value)}
            className="bg-gray-100 border-gray-300 text-sm"
            data-testid="input-mtd-dealer-month"
          />
          <Card className="border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-b">
                      <TableHead className="text-xs font-semibold">Dealer ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Total Apts ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Daily Avg ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Campaign ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Confirmations ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Data Mining ↑</TableHead>
                      <TableHead className="text-xs font-semibold">Follow... ↑</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mtdDealerStats.map((row, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="text-xs py-3">{row.dealer}</TableCell>
                        <TableCell className="text-xs py-3">{row.total_apts}</TableCell>
                        <TableCell className="text-xs py-3">{row.daily_avg}</TableCell>
                        <TableCell className="text-xs py-3">{row.campaigns}</TableCell>
                        <TableCell className="text-xs py-3">{row.confirmations}</TableCell>
                        <TableCell className="text-xs py-3">{row.data_mining}</TableCell>
                        <TableCell className="text-xs py-3">{row.follow_up}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">4</Button>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">5</Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reg/Carryout Call - Agent Stats (Full Width) */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Reg/Carryout Call - Agent Stats</h3>
        <Input
          value={ringCentralDate}
          onChange={(e) => setRingCentralDate(e.target.value)}
          className="bg-gray-100 border-gray-300 text-sm max-w-md"
          data-testid="input-ringcentral-date"
        />
        <Card className="border">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b">
                    <TableHead className="text-xs font-semibold">Agent ↑</TableHead>
                    <TableHead className="text-xs font-semibold">Today Calls ↑</TableHead>
                    <TableHead className="text-xs font-semibold">Month Calls ↑</TableHead>
                    <TableHead className="text-xs font-semibold">Avg Daily Calls ↑</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ringCentralStats.map((row, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="text-xs py-3">{row.agent}</TableCell>
                      <TableCell className="text-xs py-3">{row.today_calls}</TableCell>
                      <TableCell className="text-xs py-3">{row.month_calls}</TableCell>
                      <TableCell className="text-xs py-3">{row.avg_daily}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-center gap-1 py-3 border-t bg-gray-50">
              <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Previous</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 px-3">1</Button>
              <Button variant="outline" size="sm" className="text-xs h-8 px-3">2</Button>
              <Button variant="outline" size="sm" className="text-xs h-8 px-3">3</Button>
              <Button variant="ghost" size="sm" className="text-xs h-8 px-3">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
