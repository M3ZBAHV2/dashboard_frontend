import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Calendar, Phone } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Dealers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">
              +4.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="appointments" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
            </TabsList>
            <TabsContent value="appointments" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <span className="font-medium">Admin Admin</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">42</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-medium">Rafael Hossain</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">38</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-medium">Maria Morozova</span>
                  </div>
                  <span className="text-lg font-bold text-amber-600">32</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calls" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <span className="font-medium">Admin Admin</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">186</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-medium">Maria Morozova</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">142</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-medium">Rafael Hossain</span>
                  </div>
                  <span className="text-lg font-bold text-amber-600">128</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
