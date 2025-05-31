"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productsData } from "@/lib/data";

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("featured");
  
  const categories = ["all", ...new Set(productsData.map(product => product.category))];
  
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOrder) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.new ? -1 : 1;
      case "featured":
      default:
        return a.featured ? -1 : 1;
    }
  });
  
  return (
    <div>
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
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
            <CardHeader className="pb-2">
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 text-lg font-semibold">₹{product.price.toFixed(2)}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button size="sm">Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your filters or search query.</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;