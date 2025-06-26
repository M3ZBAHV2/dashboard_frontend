import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Phone, CheckSquare, Plus } from "lucide-react";

export default function MyStatistics() {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  const todayStats = {
    totalAppointments: 0,
    avgHourlyAppointments: 0,
    totalFollowUps: 0,
    avgHourlyFollowUps: 0,
    totalCalls: 0,
    avgHourlyCalls: 0,
  };

  const monthToDateStats = {
    totalAppointments: 42,
    avgDailyAppointments: 1.62,
    totalFollowUps: 33,
    avgDailyFollowUps: 1.27,
    totalCalls: 0,
    avgDailyCalls: 0,
  };

  const lifetimeStats = {
    totalAppointments: 400,
    avgDailyAppointments: 7.26,
    totalFollowUps: 159,
    avgDailyFollowUps: 2.88,
    totalCalls: 0,
    avgDailyCalls: 0,
  };

  const hourlyMetrics = [
    { time: "08 AM", appointments: 0 },
    { time: "09 AM", appointments: 0 },
    { time: "10 AM", appointments: 0 },
    { time: "11 AM", appointments: 0 },
    { time: "12 PM", appointments: 0 },
    { time: "01 PM", appointments: 0 },
    { time: "02 PM", appointments: 0 },
    { time: "03 PM", appointments: 0 },
    { time: "04 PM", appointments: 0 },
  ];

  const StatCard = ({ title, value, average, icon: Icon, bgColor, textColor }: any) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500">{average}</p>
          </div>
          <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center`}>
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Statistics</h1>
          <div className="text-sm text-gray-500 mt-1">
            Dashboard / My Statistics
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Appointment
        </Button>
      </div>

      {/* Today Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Appointments"
            value={todayStats.totalAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Avg. Hourly Appointment"
            value={todayStats.avgHourlyAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Total Follow Ups"
            value={todayStats.totalFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
          <StatCard
            title="Avg. Hourly Follow Ups"
            value={todayStats.avgHourlyFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <StatCard
            title="Total Calls"
            value={todayStats.totalCalls}
            average=""
            icon={Phone}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Avg. Hourly Calls"
            value={todayStats.avgHourlyCalls}
            average=""
            icon={Phone}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
        </div>
      </div>

      {/* Month To Date Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Month To Date :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Appointments"
            value={monthToDateStats.totalAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Avg. Daily Appointment"
            value={monthToDateStats.avgDailyAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Total Follow Ups"
            value={monthToDateStats.totalFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
          <StatCard
            title="Avg. Daily Follow Ups"
            value={monthToDateStats.avgDailyFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <StatCard
            title="Total Calls"
            value={monthToDateStats.totalCalls}
            average=""
            icon={Phone}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Avg. Daily Calls"
            value={monthToDateStats.avgDailyCalls}
            average=""
            icon={Phone}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
        </div>
      </div>

      {/* Lifetime Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lifetime :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Appointments"
            value={lifetimeStats.totalAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Average Daily Appointments"
            value={lifetimeStats.avgDailyAppointments}
            average=""
            icon={CalendarDays}
            bgColor="bg-green-100"
            textColor="text-green-600"
          />
          <StatCard
            title="Total Follow Ups"
            value={lifetimeStats.totalFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
          <StatCard
            title="Average daily follow ups"
            value={lifetimeStats.avgDailyFollowUps}
            average=""
            icon={CheckSquare}
            bgColor="bg-purple-100"
            textColor="text-purple-600"
          />
        </div>
      </div>

      {/* Today Hourly Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Today Hourly Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  {hourlyMetrics.map((metric) => (
                    <th key={metric.time} className="text-center py-2 px-4 text-sm font-medium text-gray-600">
                      {metric.time}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">Appointment</td>
                  {hourlyMetrics.map((metric) => (
                    <td key={`${metric.time}-appointments`} className="text-center py-3 px-4 text-sm text-gray-600">
                      {metric.appointments}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}