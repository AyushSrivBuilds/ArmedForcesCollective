import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck, Users, BookOpen, Award, Heart, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Armed Forces of India Educational Platform",
  description: "Learn about our mission, values, and the team behind the Armed Forces of India Educational Platform",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/8370424/pexels-photo-8370424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our mission, our team, and how we're working to strengthen 
              national security through education and community engagement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg mb-6">
                The Armed Forces of India Educational Platform was established to bridge the gap between
                military expertise and civilian knowledge, creating a more secure and informed society.
              </p>
              <p className="text-lg mb-6">
                Our mission is to leverage the vast knowledge and experience of our armed forces personnel
                to educate and prepare citizens for various security challenges, while also providing veterans
                with opportunities to continue serving their nation through knowledge sharing.
              </p>
              <p className="text-lg">
                We envision a society where military and civilian spheres collaborate closely on educational
                initiatives that strengthen our collective security and resilience against modern threats.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Enhancing national security through education and awareness.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Providing quality learning resources for all citizens.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Building bridges between military and civilian communities.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Award className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Upholding the highest standards in all our initiatives.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lt. Gen. Rajesh Kumar (Retd.)",
                role: "Executive Director",
                image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "With over 35 years of service in the Indian Army, Lt. Gen. Kumar brings extensive leadership experience to our educational initiatives."
              },
              {
                name: "Dr. Meera Patel",
                role: "Academic Director",
                image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Dr. Patel holds a Ph.D. in Education and has specialized in developing security education programs for diverse audiences."
              },
              {
                name: "Capt. Vikram Singh (Retd.)",
                role: "Community Outreach Director",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Captain Singh focuses on building partnerships between military and civilian sectors to expand our educational impact."
              },
              {
                name: "Neha Sharma",
                role: "Program Development Manager",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "With a background in curriculum development, Neha designs engaging and effective educational programs for all audiences."
              },
              {
                name: "Col. Ajay Mehta (Retd.)",
                role: "Veterans Affairs Director",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Colonel Mehta oversees our initiatives to engage veterans and utilize their expertise for educational purposes."
              },
              {
                name: "Priya Desai",
                role: "Digital Content Director",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Priya leads our digital content strategy, ensuring accessible and engaging educational materials across all platforms."
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section id="contact" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-6">
                Have questions about our educational programs or want to learn more about
                how you can get involved? We'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 11 2678 9012</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@armedforceeducation.org.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Educational Wing, Defence HQ, South Block, New Delhi - 110011</span>
                </div>
              </div>
              
              <Button size="lg" className="gap-2">
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Button>
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}