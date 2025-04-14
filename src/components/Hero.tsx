
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920)', 
          filter: 'brightness(0.6)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl flex flex-col items-start gap-6 animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight">
            Artisan Coffee <span className="block">& Pastries</span>
          </h1>
          <p className="text-xl md:text-2xl">
            Experience the perfect blend of flavor and ambiance at Café Bliss.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu">
              <Button size="lg" className="bg-cafe-brown hover:bg-cafe-brown/90 text-white px-8">
                View Menu
              </Button>
            </Link>
            <Link to="/order">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cafe-brown px-8">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
