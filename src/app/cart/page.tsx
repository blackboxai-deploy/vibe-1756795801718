'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="container py-16">
        <div className="text-center space-y-6">
          <div className="text-6xl">🛒</div>
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <p className="text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button onClick={() => router.push('/products')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (productId: string, selectedSize: string, selectedColor: string, newQuantity: string) => {
    const qty = parseInt(newQuantity);
    updateQuantity(productId, selectedSize, selectedColor, qty);
  };

  const handleRemoveItem = (productId: string, selectedSize: string, selectedColor: string) => {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(productId, selectedSize, selectedColor);
    }
  };

  const handleCheckout = () => {
    alert('Checkout functionality will be implemented with payment integration!');
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground">
          You have {cart.itemCount} item{cart.itemCount !== 1 ? 's' : ''} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <Card key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 h-32 rounded-md overflow-hidden bg-muted">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {item.product.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {item.selectedSize}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.selectedColor}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Qty:</span>
                        <Select 
                          value={item.quantity.toString()} 
                          onValueChange={(value) => handleQuantityChange(item.product.id, item.selectedSize, item.selectedColor, value)}
                        >
                          <SelectTrigger className="w-16 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ₹{item.product.price.toLocaleString()} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" onClick={() => router.push('/products')}>
              Continue Shopping
            </Button>
            <Button variant="destructive" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cart.itemCount} items)</span>
                  <span>₹{cart.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>₹{Math.round(cart.total * 0.18).toLocaleString()}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{Math.round(cart.total * 1.18).toLocaleString()}</span>
              </div>

              <Button size="lg" className="w-full" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                <p>Free shipping on all orders</p>
                <p>Secure checkout with 256-bit SSL encryption</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}