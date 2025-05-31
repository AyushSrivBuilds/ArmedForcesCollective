import { Metadata } from "next";
import ProductGrid from "@/components/shop/ProductGrid";
import DonateSection from "@/components/shop/DonateSection";

export const metadata: Metadata = {
  title: "Shop & Donate | Armed Forces of India Educational Platform",
  description: "Purchase merchandise and support our mission through donations",
};

export default function ShopPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-secondary relative py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
          }}
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Shop & Support</h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of merchandise and make a difference through your purchase or donation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Shop Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <ProductGrid />
        </div>
      </section>
      
      {/* Donation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your contribution helps us provide educational resources and support for our service members.
            </p>
          </div>
          <DonateSection />
        </div>
      </section>
    </div>
  );
}