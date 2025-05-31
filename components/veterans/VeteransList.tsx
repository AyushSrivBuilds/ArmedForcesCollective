"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, MessageSquare, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { veteransData } from "@/lib/data";

const VeteransList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  const [expertiseFilter, setExpertiseFilter] = useState("all");
  
  // Extract unique expertise areas from all veterans
  const allExpertise = Array.from(
    new Set(
      veteransData.flatMap(veteran => veteran.expertise)
    )
  ).sort();

  const filteredVeterans = veteransData.filter(veteran => {
    const matchesBranch = branchFilter === "all" || veteran.branch === branchFilter;
    
    const matchesExpertise = expertiseFilter === "all" || 
      veteran.expertise.includes(expertiseFilter);
    
    const matchesSearch = veteran.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      veteran.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veteran.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesBranch && matchesExpertise && matchesSearch;
  });

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Filters and Search */}
        <div className="bg-card rounded-lg shadow-sm p-6 mb-10 border">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-medium">Find Veterans</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={branchFilter} onValueChange={setBranchFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                <SelectItem value="Army">Army</SelectItem>
                <SelectItem value="Navy">Navy</SelectItem>
                <SelectItem value="Air Force">Air Force</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Expertise</SelectItem>
                {allExpertise.map(expertise => (
                  <SelectItem key={expertise} value={expertise}>
                    {expertise}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Veterans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVeterans.length > 0 ? (
            filteredVeterans.map((veteran) => (
              <Card key={veteran.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative pt-6">
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className={cn(
                        "bg-primary/10 text-primary border-primary/20",
                        veteran.branch === "Army" && "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/30",
                        veteran.branch === "Navy" && "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/30",
                        veteran.branch === "Air Force" && "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800/30"
                      )}
                    >
                      {veteran.branch}
                    </Badge>
                  </div>
                  <div className="flex justify-center mb-2">
                    <Avatar className="h-32 w-32 border-4 border-background">
                      <AvatarImage src={veteran.image} alt={veteran.name} />
                      <AvatarFallback>{veteran.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <CardHeader className="text-center pt-2 pb-2">
                  <CardTitle>{veteran.name}</CardTitle>
                  <CardDescription>
                    {veteran.rank} (Retd.) • {veteran.yearsOfService} Years of Service
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {veteran.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {veteran.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button variant="outline" className="w-1/2">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                  <Button className="w-1/2">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Full Profile
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No veterans found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters to find veterans.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setBranchFilter("all");
                  setExpertiseFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VeteransList;