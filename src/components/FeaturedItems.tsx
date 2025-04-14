
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { menuItems } from '@/data/menuData';

const FeaturedItems = () => {
  const { addToCart } = useCart();
  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Items</h2>
          <p className="section-subtitle">Discover our most popular offerings, crafted with care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-playfair">{item.name}</h3>
                  <span className="font-semibold text-cafe-brown">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-cafe-brown hover:bg-cafe-brown/90 gap-2"
                >
                  <PlusCircle size={18} /> 
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
