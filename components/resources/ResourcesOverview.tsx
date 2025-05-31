"use client";

import Link from "next/link";
import { Download, ExternalLink, FileText, Lock, Shield, AlertTriangle } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resourcesData } from "@/lib/data";

const ResourcesOverview = () => {
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

  const categories = ["All", "Security Awareness", "Emergency Preparedness", "Misinformation"];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access downloadable guides and resources on security awareness, emergency preparedness, 
            and combating misinformation.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full max-w-3xl mx-auto mb-10">
          <TabsList className="grid grid-cols-4 w-full">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category === "All" ? category : 
                  <div className="flex items-center gap-1 text-xs md:text-sm">
                    {getResourceIcon(category)}
                    <span className="hidden md:inline">{category}</span>
                  </div>
                }
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourcesData
                  .filter((resource) => category === "All" || resource.category === category)
                  .slice(0, 6)
                  .map((resource) => (
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
                      <CardFooter className="flex justify-between pt-0">
                        <div className="text-xs text-muted-foreground">
                          {resource.pages} pages • {resource.downloadCount} downloads
                        </div>
                        <Button size="sm" variant="ghost" className="gap-1">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-8">
          <Link href="/resources" passHref>
            <Button variant="outline" size="lg" className="gap-2">
              View All Resources
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesOverview;