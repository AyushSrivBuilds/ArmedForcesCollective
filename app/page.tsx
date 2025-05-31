import HeroSection from "@/components/layout/HeroSection";
import FeaturedPrograms from "@/components/programs/FeaturedPrograms";
import VeteranHighlights from "@/components/veterans/VeteranHighlights";
import ResourcesOverview from "@/components/resources/ResourcesOverview";
import ShopPreview from "@/components/shop/ShopPreview";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      
      {/* Mission Statement */}
      <section className="py-12 bg-secondary/30">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Empowering through education, the Armed Forces of India Educational Platform
            connects service members, veterans, and civilians through knowledge sharing,
            training programs, and community building initiatives that strengthen our
            collective security and national pride.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p>Providing quality educational resources and programs for service members, veterans, and civilians.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p>Building connections between military personnel and civilian populations through shared knowledge.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p>Upholding the highest standards in our educational offerings and community initiatives.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <FeaturedPrograms />
      
      {/* Veterans Spotlight */}
      <VeteranHighlights />
      
      {/* Resources Preview */}
      <ResourcesOverview />
      
      {/* Shop Preview */}
      <ShopPreview />
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to strengthen national security through education and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Register for Events</Button>
            <Button size="lg" variant="outline">Support Our Mission</Button>
          </div>
        </div>
      </section>
    </div>
  );
}