"use client";

import { useState } from "react";
import { 
  Download, 
  FileText, 
  Search, 
  Filter, 
  Shield, 
  AlertTriangle, 
  Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { resourcesData } from "@/lib/data";

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(resourcesData.map(resource => resource.category)))];
  
  const getResourceIcon = (category: string) => {
    switch (category) {
      case "Security Awareness":
        return <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case "Emergency Preparedness":
        return <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
      case "Misinformation":
        return <Lock className="h-5 w-5 text-red-600 dark:text-red-400" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory = categoryFilter === "All" || resource.category === categoryFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Filters and Search */}
        <div className="bg-card rounded-lg shadow-sm p-6 mb-10 border">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-medium">Find Resources</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    <div className="flex items-center gap-2">
                      {category !== "All" && getResourceIcon(category)}
                      <span>{category}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="All" value={categoryFilter} onValueChange={setCategoryFilter} className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category === "All" ? category : (
                  <div className="flex items-center gap-1">
                    {getResourceIcon(category)}
                    <span className="hidden md:inline">{category.split(' ')[0]}</span>
                  </div>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">
                      {resource.fileType.toUpperCase()}
                    </Badge>
                    <div className="text-muted-foreground text-sm">
                      {getResourceIcon(resource.category)}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-xs text-muted-foreground">
                    {resource.pages} pages • {resource.downloadCount} downloads
                  </div>
                  <Button size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("All");
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

export default ResourceLibrary;