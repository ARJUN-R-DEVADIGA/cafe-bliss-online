
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { reviews } from '@/data/reviewsData';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about their experience at Café Bliss.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReviewsPage;
