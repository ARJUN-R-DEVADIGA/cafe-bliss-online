
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { reviews } from '@/data/reviewsData';

const Testimonials = () => {
  return (
    <section className="py-16 bg-cafe-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Don't just take our word for it - here's what our customers think.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
