"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const heroImages = [
  {
    url: "https://organiser.org/wp-content/uploads/2024/01/indian-army-4.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Indian Army soldiers in formation",
    caption: "Strength through Unity",
  },
  {
    url: "https://newslivetv.com/wp-content/uploads/2025/05/Operation-Sindoor-Indian-Air-Force.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    alt: "Indian Air Force jet in flight",
    caption: "Guardians of the Sky",
  },
  {
    url: "https://assets.telegraphindia.com/abp/2023/Dec/1703251677_26-new-rafale-deal-lead.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Indian Navy ship at sea",
    caption: "Protecting Our Waters",
  },
];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFirstImageActuallyLoaded, setIsFirstImageActuallyLoaded] = useState(false);

  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = heroImages[0].url;
    firstImg.onload = () => {
      setIsFirstImageActuallyLoaded(true);
    };
    firstImg.onerror = () => {
      console.error("HeroSection: First image failed to load.");
      setIsFirstImageActuallyLoaded(true); // Set to true anyway to allow UI to proceed
    };

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Hero Images */}
      {heroImages.map((image, index) => {
        const isActive = index === activeImageIndex;
        let isVisibleForOpacity = false;
        if (isActive) {
          if (index === 0) { // First image
            isVisibleForOpacity = isFirstImageActuallyLoaded;
          } else { // Subsequent images
            isVisibleForOpacity = true;
          }
        }

        let applyInitialScaleEffect = false;
        if (index === 0) {
          applyInitialScaleEffect = isFirstImageActuallyLoaded;
        } else {
          applyInitialScaleEffect = isActive;
        }

        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isVisibleForOpacity ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.url})`,
                transform: applyInitialScaleEffect ? "scale(1)" : "scale(1.1)",
                transition: "transform 10s ease-in-out",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        );
      })}

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Educating for a Secure Tomorrow
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
              Join India&apos;s armed forces in their mission to share knowledge, 
              build resilience, and strengthen our national security through 
              education and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button size="lg" className="bg-primary bg-opacity-100 text-white hover:bg-primary/80">
                Upcoming Events <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === activeImageIndex ? "bg-white w-8" : "bg-white/50"
            )}
            onClick={() => setActiveImageIndex(index)}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;