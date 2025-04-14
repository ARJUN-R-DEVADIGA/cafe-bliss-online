
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-playfair">{item.name}</h3>
          <span className="font-semibold text-cafe-brown">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground">{item.description}</p>
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {item.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs px-2 py-0.5 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={() => addToCart(item)}
          className="w-full bg-cafe-brown hover:bg-cafe-brown/90 gap-2"
        >
          <PlusCircle size={18} /> 
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
