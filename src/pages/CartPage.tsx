
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Trash } from 'lucide-react';

const CartPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/menu">
                <Button className="bg-cafe-brown hover:bg-cafe-brown/90">
                  Browse Our Menu
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b bg-muted/50 flex justify-between">
                  <h2 className="font-medium">Items ({cartItems.length})</h2>
                  <Button 
                    variant="ghost" 
                    className="h-8 gap-2 text-muted-foreground hover:text-destructive"
                    onClick={clearCart}
                  >
                    <Trash className="h-4 w-4" /> Clear cart
                  </Button>
                </div>
                
                <div className="p-4">
                  {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${(totalPrice * 0.0725).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>$3.99</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${(totalPrice + (totalPrice * 0.0725) + 3.99).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-2/3 flex items-end justify-end">
                  <Link to="/order" className="w-full md:w-auto">
                    <Button className="w-full bg-cafe-brown hover:bg-cafe-brown/90 h-12 px-8">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;
