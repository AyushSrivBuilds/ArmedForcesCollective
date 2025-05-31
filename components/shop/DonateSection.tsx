"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress"; // Commented out for build test
import {
  DollarSign,
  Users, 
  Book, 
  Shield, 
  Heart, 
  Sparkles,
  BarChart4,
  PieChart,
  HandHeart,
  Pencil,
} from "lucide-react";

const DonateSection = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");

  const donationOptions = [
    { amount: 500, label: "₹500" },
    { amount: 1000, label: "₹1,000" },
    { amount: 2500, label: "₹2,500" },
    { amount: 5000, label: "₹5,000" },
  ];

  const donationCategories = [
    { id: "education", name: "Education Programs", icon: <Book className="h-5 w-5" />, raised: 850000, goal: 1000000 },
    { id: "veterans", name: "Veterans Support", icon: <Users className="h-5 w-5" />, raised: 650000, goal: 750000 },
    { id: "research", name: "Security Research", icon: <Shield className="h-5 w-5" />, raised: 450000, goal: 600000 },
  ];

  const allocationData = [
    { category: "Educational Programs", percentage: 40, icon: <Book className="h-5 w-5" /> },
    { category: "Veterans Welfare", percentage: 25, icon: <Users className="h-5 w-5" /> },
    { category: "Research & Development", percentage: 20, icon: <Shield className="h-5 w-5" /> },
    { category: "Administrative Costs", percentage: 15, icon: <PieChart className="h-5 w-5" /> },
  ];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center gap-2 mb-6">
            <HandHeart className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Support Our Mission</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Your donation helps us provide quality educational resources, support veterans, 
            and conduct research that strengthens our national security.
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Fund Allocation Transparency</h4>
            <div className="space-y-4">
              {allocationData.map((item) => (
                <div key={item.category} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                    {/* <Progress value={item.percentage} className="h-2" /> */} {/* Commented out for build test */}
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden"> {/* Placeholder visual */}
                        <div className="h-full bg-primary transition-all" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-lg font-bold">₹2.5M+</div>
                  <div className="text-sm text-muted-foreground">Raised this year</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-lg font-bold">1,200+</div>
                  <div className="text-sm text-muted-foreground">Regular donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-card">
          <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
          
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="general">General Fund</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="veterans">Veterans</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <p className="text-muted-foreground mb-6">
                Your donation to our general fund supports all our initiatives based on current needs.
              </p>
            </TabsContent>
            
            <TabsContent value="programs">
              <div className="space-y-4 mb-6">
                {donationCategories.map((category) => (
                  <div key={category.id} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-md bg-primary/10">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{category.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          ₹{(category.raised / 100000).toFixed(1)}L raised of ₹{(category.goal / 100000).toFixed(1)}L goal
                        </div>
                      </div>
                    </div>
                    {/* <Progress
                      value={(category.raised / category.goal) * 100}
                      className="h-2"
                    /> */} {/* Commented out for build test */}
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden"> {/* Placeholder visual */}
                        <div className="h-full bg-primary transition-all" style={{ width: `${(category.raised / category.goal) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="veterans">
              <p className="text-muted-foreground mb-6">
                Support our veterans through education, training, and reintegration programs.
              </p>
            </TabsContent>
          </Tabs>
          
          <div className="mb-6">
            <div className="text-sm font-medium mb-2">Select Amount</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {donationOptions.map((option) => (
                <Button
                  key={option.amount}
                  variant={donationAmount === option.amount ? "default" : "outline"}
                  className="h-12"
                  onClick={() => {
                    setDonationAmount(option.amount);
                    setCustomAmount("");
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Pencil className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          
          <Button className="w-full h-12" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Donate Now
          </Button>
          
          <div className="mt-4 text-xs text-center text-muted-foreground">
            Secured by Razorpay • Tax deductible under Section 80G
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;