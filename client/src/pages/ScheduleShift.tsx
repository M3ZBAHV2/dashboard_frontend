import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User, Settings } from "lucide-react";

export default function ScheduleShift() {
  const [scheduleData, setScheduleData] = useState({
    schedule: "",
    day: "Monday",
    startTime: "",
    endTime: "",
    lunchStartTime: "",
    lunchEndTime: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setScheduleData(prev => ({ ...prev, [field]: value }));
  };

  const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <div>
              <CardTitle>Schedule & Shift</CardTitle>
              <div className="text-sm text-gray-500 mt-1">
                Dashboard / Schedule & Shift
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile-setting" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile-setting" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile Setting
              </TabsTrigger>
              <TabsTrigger value="change-password" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Change Password
              </TabsTrigger>
              <TabsTrigger value="schedule-shift" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule & Shift
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile-setting" className="space-y-6 mt-6">
              <div className="text-center py-8">
                <p className="text-gray-500">Profile settings will be available here.</p>
              </div>
            </TabsContent>

            <TabsContent value="change-password" className="space-y-6 mt-6">
              <div className="text-center py-8">
                <p className="text-gray-500">Password change form will be available here.</p>
              </div>
            </TabsContent>

            <TabsContent value="schedule-shift" className="space-y-6 mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Schedule & Shift</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Schedule Selection */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="schedule">Schedule</Label>
                      <Select 
                        value={scheduleData.schedule} 
                        onValueChange={(value) => handleInputChange("schedule", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full Time (9 AM - 5 PM)</SelectItem>
                          <SelectItem value="part-time">Part Time (12 PM - 6 PM)</SelectItem>
                          <SelectItem value="custom">Custom Schedule</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Right Column - Daily Schedule */}
                  <div className="space-y-6">
                    <h4 className="font-medium text-gray-900">Daily Schedule Configuration</h4>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="day">Day</Label>
                          <Select 
                            value={scheduleData.day} 
                            onValueChange={(value) => handleInputChange("day", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {days.map((day) => (
                                <SelectItem key={day} value={day}>{day}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="startTime">Start Time</Label>
                          <Input
                            id="startTime"
                            type="time"
                            value={scheduleData.startTime}
                            onChange={(e) => handleInputChange("startTime", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="endTime">End Time</Label>
                          <Input
                            id="endTime"
                            type="time"
                            value={scheduleData.endTime}
                            onChange={(e) => handleInputChange("endTime", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="lunchStartTime">Lunch Start Time</Label>
                          <Input
                            id="lunchStartTime"
                            type="time"
                            value={scheduleData.lunchStartTime}
                            onChange={(e) => handleInputChange("lunchStartTime", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lunchEndTime">Lunch End Time</Label>
                          <Input
                            id="lunchEndTime"
                            type="time"
                            value={scheduleData.lunchEndTime}
                            onChange={(e) => handleInputChange("lunchEndTime", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button className="bg-primary hover:bg-primary/90 px-8">
                    Change Schedule & Shift
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}