import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500">
                <span className="text-sm font-bold text-white">IC</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Indian Clothes
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover the beauty of traditional Indian clothing with our curated collection of sarees, lehengas, kurtas, and more.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.988 11.987 6.62 0 11.987-5.366 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.877-.808-1.297-1.78-1.297-2.917 0-1.136.42-2.108 1.297-2.916.878-.808 2.029-1.297 3.326-1.297 1.297 0 2.448.489 3.326 1.297.877.808 1.297 1.78 1.297 2.916 0 1.137-.42 2.109-1.297 2.917-.878.807-2.029 1.297-3.326 1.297zm7.718-9.081h-1.416c-.137-.688-.457-1.245-.961-1.668-.504-.423-1.077-.635-1.718-.635-.641 0-1.214.212-1.718.635-.504.423-.824.98-.961 1.668H8.977c-.137.135-.274.338-.41.609-.137.271-.205.542-.205.813 0 .542.205 1.017.615 1.424.41.407.889.61 1.438.61.548 0 1.027-.203 1.438-.61.41-.407.615-.882.615-1.424 0-.271-.068-.542-.205-.813-.136-.271-.273-.474-.41-.609z"/>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Shop</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/products?category=sarees" className="text-muted-foreground hover:text-primary">
                Sarees
              </Link>
              <Link href="/products?category=lehengas" className="text-muted-foreground hover:text-primary">
                Lehengas
              </Link>
              <Link href="/products?category=kurtas" className="text-muted-foreground hover:text-primary">
                Kurtas
              </Link>
              <Link href="/products?category=sherwanis" className="text-muted-foreground hover:text-primary">
                Sherwanis
              </Link>
              <Link href="/products?category=salwar-suits" className="text-muted-foreground hover:text-primary">
                Salwar Suits
              </Link>
              <Link href="/products?category=kids" className="text-muted-foreground hover:text-primary">
                Kids Wear
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Customer Care</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
              <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                Shipping Info
              </Link>
              <Link href="/returns" className="text-muted-foreground hover:text-primary">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="text-muted-foreground hover:text-primary">
                Size Guide
              </Link>
              <Link href="/care" className="text-muted-foreground hover:text-primary">
                Care Instructions
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary">
                Careers
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Indian Clothes. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>We accept:</span>
              <div className="flex space-x-2">
                <div className="px-2 py-1 border rounded text-xs">VISA</div>
                <div className="px-2 py-1 border rounded text-xs">MC</div>
                <div className="px-2 py-1 border rounded text-xs">UPI</div>
                <div className="px-2 py-1 border rounded text-xs">GPay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}