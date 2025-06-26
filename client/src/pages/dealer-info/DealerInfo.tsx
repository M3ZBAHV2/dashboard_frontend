import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const dealers = [
  { id: 1, name: "Downtown Auto Center", email: "f.salm@downtownautocenter.com", phone: "(555) 123-4567" },
  { id: 2, name: "BMW MINI of Sterling", email: "julius.green@bmwsterling.com", phone: "(555) 987-6543" },
  { id: 3, name: "Creative Automotive Marketing", email: "contact@creativeautomotive.com", phone: "(555) 456-7890" },
];

export default function DealerInfo() {
  const [selectedDealer, setSelectedDealer] = useState<string>("");
  const [dealerCode, setDealerCode] = useState("");
  const [dealerDetails, setDealerDetails] = useState<any>(null);

  const handleLoadDealer = () => {
    const dealer = dealers.find(d => d.id.toString() === selectedDealer);
    if (dealer) {
      setDealerDetails(dealer);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dealer Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="dealer-select">Select Dealer</Label>
            <Select value={selectedDealer} onValueChange={setSelectedDealer}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a dealer..." />
              </SelectTrigger>
              <SelectContent>
                {dealers.map((dealer) => (
                  <SelectItem key={dealer.id} value={dealer.id.toString()}>
                    {dealer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dealer-code">Dealer Code</Label>
            <Input
              id="dealer-code"
              placeholder="Enter dealer code..."
              value={dealerCode}
              onChange={(e) => setDealerCode(e.target.value)}
            />
          </div>
        </div>
        
        <Button onClick={handleLoadDealer} disabled={!selectedDealer}>
          Load Dealer Information
        </Button>
        
        {/* Dealer Details Panel */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-md font-semibold text-gray-800 mb-4">Dealer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-600">Name:</span>
              <span className="ml-2 text-gray-800">
                {dealerDetails?.name || "Select a dealer to view details"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Email:</span>
              <span className="ml-2 text-gray-800">
                {dealerDetails?.email || "-"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Phone:</span>
              <span className="ml-2 text-gray-800">
                {dealerDetails?.phone || "-"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
