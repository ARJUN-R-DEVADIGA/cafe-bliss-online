
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

const OrderPage = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderType, setOrderType] = useState('delivery');

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Please add items before checking out.');
      navigate('/menu');
      return;
    }

    setIsSubmitting(true);

    // Simulate order submission
    setTimeout(() => {
      clearCart();
      toast.success('Your order has been successfully placed!');
      navigate('/');
      setIsSubmitting(false);
    }, 1500);
  };

  const tax = totalPrice * 0.0725;
  const delivery = orderType === 'delivery' ? 3.99 : 0;
  const total = totalPrice + tax + delivery;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Checkout</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some items to your cart before proceeding to checkout.</p>
              <Link to="/menu">
                <Button className="bg-cafe-brown hover:bg-cafe-brown/90">
                  Browse Our Menu
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Order Details</h2>
                  </div>
                  
                  <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
                    {/* Order Type */}
                    <div className="space-y-3">
                      <Label>Order Type</Label>
                      <RadioGroup 
                        defaultValue="delivery" 
                        className="flex flex-col space-y-1"
                        value={orderType}
                        onValueChange={setOrderType}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery" className="font-normal cursor-pointer">Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <Label htmlFor="pickup" className="font-normal cursor-pointer">Pickup</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 123-4567" required />
                      </div>
                    </div>
                    
                    {/* Delivery Address (show only if delivery is selected) */}
                    {orderType === 'delivery' && (
                      <div className="space-y-3">
                        <h3 className="font-semibold">Delivery Address</h3>
                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input id="address" placeholder="123 Main St" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Anytown" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="CA" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" placeholder="12345" required />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Special Instructions */}
                    <div className="space-y-2">
                      <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                      <Textarea 
                        id="instructions" 
                        placeholder="Any special requests or delivery instructions..."
                        className="resize-none"
                      />
                    </div>
                    
                    {/* Payment Method */}
                    <div className="space-y-3">
                      <h3 className="font-semibold">Payment Method</h3>
                      <RadioGroup defaultValue="cash" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label htmlFor="cash" className="font-normal cursor-pointer">Cash on Delivery/Pickup</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="font-normal cursor-pointer">Credit/Debit Card</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-cafe-brown hover:bg-cafe-brown/90 h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                  </div>
                  
                  <div className="p-6">
                    {/* Items */}
                    <div className="max-h-60 overflow-y-auto mb-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between py-2 border-b last:border-b-0">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{item.quantity}×</span>
                            <span>{item.name}</span>
                          </div>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Costs */}
                    <div className="space-y-2 pb-4 border-b">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>{orderType === 'delivery' ? `$${delivery.toFixed(2)}` : 'Free'}</span>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderPage;
