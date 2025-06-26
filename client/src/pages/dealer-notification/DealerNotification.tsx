import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    title: "New Appointment Scheduled",
    message: "Downtown Auto Center - Service appointment scheduled for tomorrow",
    time: "2 hours ago",
    status: "new",
  },
  {
    id: 2,
    title: "Lead Source Updated",
    message: "BMW MINI of Sterling - Internet lead source configuration updated",
    time: "5 hours ago",
    status: "updated",
  },
  {
    id: 3,
    title: "System Maintenance",
    message: "Scheduled maintenance completed successfully",
    time: "1 day ago",
    status: "completed",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new":
      return "bg-blue-600";
    case "updated":
      return "bg-green-500";
    case "completed":
      return "bg-gray-400";
    default:
      return "bg-gray-400";
  }
};

export default function DealerNotification() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dealer Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">{notification.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <span className={`w-3 h-3 ${getStatusColor(notification.status)} rounded-full`}></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
