"use client";

import React from "react";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from "date-fns";
import { CalendarIcon, Filter, Users, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { programsData } from "@/lib/data";
import { cn } from "@/lib/utils";

const ProgramCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<"calendar" | "list">("list");
  const [filters, setFilters] = useState({
    type: "all",
    audience: "all",
  });

  const filteredPrograms = programsData.filter((program) => {
    const typeMatch = filters.type === "all" || program.type === filters.type;
    const audienceMatch = filters.audience === "all" || program.audience === filters.audience;
    return typeMatch && audienceMatch;
  });

  const getProgramIcon = (type: string) => {
    switch (type) {
      case "webinar": return <CalendarIcon className="h-5 w-5" />;
      case "workshop": return <Users className="h-5 w-5" />;
      case "course": return <BookOpen className="h-5 w-5" />;
      case "bootcamp": return <Award className="h-5 w-5" />;
      default: return <CalendarIcon className="h-5 w-5" />;
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

  const handleNextMonth = () => setDate(addMonths(date, 1));
  const handlePrevMonth = () => setDate(subMonths(date, 1));

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Filter Programs</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Select
              value={filters.type}
              onValueChange={(value) => setFilters({ ...filters, type: value })}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Program Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="webinar">Webinars</SelectItem>
                <SelectItem value="workshop">Workshops</SelectItem>
                <SelectItem value="course">Courses</SelectItem>
                <SelectItem value="bootcamp">Bootcamps</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filters.audience}
              onValueChange={(value) => setFilters({ ...filters, audience: value })}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Audiences</SelectItem>
                <SelectItem value="civilians">Civilians</SelectItem>
                <SelectItem value="veterans">Veterans</SelectItem>
                <SelectItem value="families">Families</SelectItem>
              </SelectContent>
            </Select>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{format(date, "MMMM yyyy")}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <div className="flex gap-1">
              <Button variant="outline" size="icon" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={view === "list" ? "default" : "outline"} 
              size="sm"
              onClick={() => setView("list")}
            >
              List View
            </Button>
            <Button 
              variant={view === "calendar" ? "default" : "outline"} 
              size="sm"
              onClick={() => setView("calendar")}
            >
              Calendar View
            </Button>
          </div>
        </div>
        
        {/* Calendar/List View */}
        {view === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <CardContent className="p-6">
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
                    <div className="text-sm text-muted-foreground mb-1">
                      <strong>Date:</strong> {new Date(program.date).toLocaleDateString("en-IN", { 
                        day: "numeric", 
                        month: "short", 
                        year: "numeric" 
                      })}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      <strong>Time:</strong> {program.time}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      <strong>Location:</strong> {program.location}
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No programs found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find programs.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-muted/50 border-b flex justify-between items-center">
              <Button variant="ghost" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                {format(subMonths(date, 1), "MMMM")}
              </Button>
              <h3 className="text-xl font-bold">{format(date, "MMMM yyyy")}</h3>
              <Button variant="ghost" onClick={handleNextMonth}>
                {format(addMonths(date, 1), "MMMM")}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-px bg-muted">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-4 text-center font-medium bg-card">
                  {day}
                </div>
              ))}
              
              {eachDayOfInterval({
                start: startOfMonth(date),
                end: endOfMonth(date),
              }).map((day, index) => {
                const dayPrograms = filteredPrograms.filter(
                  (program) => program.date === format(day, "yyyy-MM-dd")
                );
                const dayNumber = format(day, "d");
                const dayOfWeek = format(day, "E");
                const isFirstDay = index === 0;
                const firstDayOfWeek = parseInt(format(startOfMonth(date), "i")) - 1;
                
                return (
                  <React.Fragment key={day.toString()}>
                    {isFirstDay && Array.from({ length: firstDayOfWeek }).map((_, i) => (
                      <div key={`empty-${i}`} className="p-2 bg-card border-t"></div>
                    ))}
                    <div className="min-h-[120px] p-2 bg-card border-t overflow-hidden">
                      <div className="font-medium mb-1">{dayNumber}</div>
                      {dayPrograms.map((program) => (
                        <div 
                          key={program.id} 
                          className={cn(
                            "text-xs p-1 mb-1 rounded truncate cursor-pointer",
                            program.audience === "civilians" && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                            program.audience === "veterans" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                            program.audience === "families" && "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                          )}
                        >
                          {program.title}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramCalendar;