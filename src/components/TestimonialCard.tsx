
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import { Review } from '@/data/reviewsData';

interface TestimonialCardProps {
  review: Review;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-cafe-gold text-cafe-gold h-5 w-5" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-cafe-gold text-cafe-gold h-5 w-5" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300 h-5 w-5" />);
    }
    
    return stars;
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {review.avatar && (
            <img 
              src={review.avatar} 
              alt={review.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <h4 className="font-medium">{review.name}</h4>
            <p className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3">
          {renderStars(review.rating)}
        </div>
        
        <p className="text-gray-600">{review.content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
