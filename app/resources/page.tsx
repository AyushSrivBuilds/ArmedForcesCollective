import { Metadata } from "next";
import ResourceLibrary from "@/components/resources/ResourceLibrary";

export const metadata: Metadata = {
  title: "Resources | Armed Forces of India Educational Platform",
  description: "Access educational resources and guides on security awareness, emergency preparedness, and more",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/159618/books-reading-education-knowledge-159618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Resources Library</h1>
            <p className="text-lg text-muted-foreground">
              Access our collection of downloadable guides and educational resources on 
              security awareness, emergency preparedness, and combating misinformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Library */}
      <ResourceLibrary />
    </div>
  );
}