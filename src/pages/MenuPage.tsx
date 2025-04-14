
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MenuItem from '@/components/MenuItem';
import { Button } from '@/components/ui/button';
import { menuItems, menuCategories } from '@/data/menuData';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Our Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of handcrafted beverages and delicious food items, made with the finest ingredients.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button 
              variant={activeCategory === 'all' ? "default" : "outline"} 
              onClick={() => setActiveCategory('all')}
              className={activeCategory === 'all' ? "bg-cafe-brown hover:bg-cafe-brown/90" : ""}
            >
              All
            </Button>
            
            {menuCategories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-cafe-brown hover:bg-cafe-brown/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
