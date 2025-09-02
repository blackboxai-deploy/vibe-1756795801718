'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data';

export function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
            <span className="text-sm font-bold text-white">IC</span>
          </div>
          <span className="hidden font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent sm:inline-block">
            Indian Clothes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/products" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            All Products
          </Link>
          
          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1">
              <span>Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-full left-0 mt-1 w-48 rounded-md border bg-popover p-1 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {category.name}
                  <span className="text-xs text-muted-foreground ml-1">({category.count})</span>
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/about" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l1.68 4.32h9.64M9 19.5a.5.5 0 11-1 0 .5.5 0 011 0zm10 0a.5.5 0 11-1 0 .5.5 0 011 0z" />
              </svg>
              {cart.itemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {cart.itemCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Authentication */}
          {user ? (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Hi, {user.name.split(' ')[0]}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <Link href="/products" className="block py-2 text-sm font-medium">
              All Products
            </Link>
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-muted-foreground">Categories</h4>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="block pl-4 py-1 text-sm hover:text-primary"
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>

            <Link href="/about" className="block py-2 text-sm font-medium">
              About
            </Link>

            {/* Mobile Auth */}
            {user ? (
              <div className="pt-4 border-t space-y-2">
                <p className="text-sm text-muted-foreground">Hi, {user.name}</p>
                <Button variant="outline" size="sm" onClick={logout} className="w-full">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="pt-4 border-t space-y-2">
                <Link href="/auth/login" className="block">
                  <Button variant="ghost" size="sm" className="w-full">Login</Button>
                </Link>
                <Link href="/auth/signup" className="block">
                  <Button size="sm" className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}