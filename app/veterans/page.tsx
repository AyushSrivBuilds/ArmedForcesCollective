import { Metadata } from "next";
import VeteransList from "@/components/veterans/VeteransList";

export const metadata: Metadata = {
  title: "Veterans Spotlight | Armed Forces of India Educational Platform",
  description: "Learn about our distinguished veterans who share their expertise through our platform",
};

export default function VeteransPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6874514/pexels-photo-6874514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Veterans Spotlight</h1>
            <p className="text-lg text-muted-foreground">
              Meet our distinguished veterans who share their expertise and experiences
              through educational programs and speaking engagements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Veterans List */}
      <VeteransList />
    </div>
  );
}