"use client";

import Link from "next/link";
import { Heart, ShoppingCart, ExternalLink, Sparkles } from "lucide-react";
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
import { productsData } from "@/lib/data";
import DonateSection from "./DonateSection";

const ShopPreview = () => {
  const featuredProducts = productsData.filter((product) => product.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop & Support</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purchase exclusive merchandise or make a donation to support our 
            educational initiatives and veteran programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {product.new && (
                  <Badge className="absolute top-3 right-3 bg-primary">New</Badge>
                )}
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 left-3 bg-background/80 hover:bg-background/90"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-4 text-lg font-semibold">₹{product.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <DonateSection />
        
        <div className="flex justify-center mt-12">
          <Link href="/shop" passHref>
            <Button variant="outline" size="lg" className="gap-2">
              Visit Shop
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;