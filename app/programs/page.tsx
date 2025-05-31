import { Metadata } from "next";
import ProgramCalendar from "@/components/programs/ProgramCalendar";

export const metadata: Metadata = {
  title: "Programs & Events | Armed Forces of India Educational Platform",
  description: "Explore and register for our educational programs, seminars, and workshops",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Programs & Events</h1>
            <p className="text-lg text-muted-foreground">
              Browse our calendar of upcoming educational events, workshops, and seminars
              designed for different audiences and covering various aspects of national security.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Calendar */}
      <ProgramCalendar />
    </div>
  );
}