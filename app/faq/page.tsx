import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Users, BookOpen, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Armed Forces of India Educational Platform",
  description: "Frequently asked questions about our educational programs and initiatives",
};

const faqData = [
  {
    question: "What types of educational programs do you offer?",
    answer: "We offer a diverse range of programs including webinars, workshops, courses, and bootcamps. These cover topics like security awareness, emergency preparedness, leadership development, and technology integration in defense.",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
  },
  {
    question: "Who can attend your programs?",
    answer: "Our programs are designed for various audiences including civilians, veterans, and military families. Some programs are specifically tailored for certain groups, while others are open to all interested participants.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
  {
    question: "How can I register for a program?",
    answer: "You can register for our programs through the Programs page on our website. Each program listing includes a registration button and detailed information about eligibility and requirements.",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
  {
    question: "Are your programs free?",
    answer: "Many of our basic programs are free, especially those focused on essential security awareness and community preparedness. Some specialized courses and workshops may have a nominal fee to cover operational costs.",
    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our educational programs,
              registration process, and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="py-4">
                    <div className="flex items-center gap-3 text-left">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}