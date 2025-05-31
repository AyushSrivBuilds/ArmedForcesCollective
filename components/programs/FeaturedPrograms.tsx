"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { programsData } from "@/lib/data";

const FeaturedPrograms = () => {
  const [audience, setAudience] = useState("all");

  const filteredPrograms = audience === "all" 
    ? programsData.slice(0, 6) 
    : programsData.filter(program => program.audience === audience).slice(0, 6);

  const getProgramIcon = (type: string) => {
    switch (type) {
      case "webinar": return <Calendar className="h-5 w-5" />;
      case "workshop": return <Users className="h-5 w-5" />;
      case "course": return <BookOpen className="h-5 w-5" />;
      case "bootcamp": return <Award className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case "civilians": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "veterans": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "families": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Programs & Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of educational programs designed for different audiences
            and covering various aspects of national security and defense.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-10">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all" onClick={() => setAudience("all")}>All</TabsTrigger>
            <TabsTrigger value="civilians" onClick={() => setAudience("civilians")}>Civilians</TabsTrigger>
            <TabsTrigger value="veterans" onClick={() => setAudience("veterans")}>Veterans</TabsTrigger>
            <TabsTrigger value="families" onClick={() => setAudience("families")}>Families</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className={cn("flex items-center gap-1", getAudienceColor(program.audience))}>
                    {program.audience.charAt(0).toUpperCase() + program.audience.slice(1)}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getProgramIcon(program.type)}
                    <span className="ml-1 capitalize">{program.type}</span>
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    {new Date(program.date).toLocaleDateString("en-IN", { 
                      day: "numeric", 
                      month: "short", 
                      year: "numeric" 
                    })}
                  </div>
                  <Button size="sm">Register</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/programs" passHref>
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;