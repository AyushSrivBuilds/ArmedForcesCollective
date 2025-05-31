"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { veteransData } from "@/lib/data";

const VeteranHighlights = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Veterans Spotlight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished veterans who share their expertise and experiences
            through educational programs and speaking engagements.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {veteransData.map((veteran) => (
              <CarouselItem key={veteran.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="relative pb-0">
                      <div className="absolute top-2 right-1">
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
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-24 w-24 border-4 border-background">
                          <AvatarImage src={veteran.image} alt={veteran.name} />
                          <AvatarFallback>{veteran.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle className="text-center">{veteran.name}</CardTitle>
                      <CardDescription className="text-center">
                        {veteran.rank} (Retd.) • {veteran.yearsOfService} Years of Service
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-4">
                      <p className="text-sm text-muted-foreground text-center">
                        {veteran.bio}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {veteran.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button size="sm" variant="outline" className="w-1/2">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                      <Button size="sm" className="w-1/2">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/veterans">View All Veterans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VeteranHighlights;