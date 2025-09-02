'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, CategoryType } from '@/lib/types';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as CategoryType || 'all';

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>(
    initialCategory === 'all' ? [] : [initialCategory]
  );
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)));
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));
  const maxPrice = Math.max(...products.map(p => p.price));

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product: Product) => {
      // Search term filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Gender filter
      if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender)) {
        return false;
      }

      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedGenders, priceRange, sortBy]);

  const handleCategoryChange = (categoryId: CategoryType, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, categoryId]);
    } else {
      setSelectedCategories(prev => prev.filter(id => id !== categoryId));
    }
  };

  const handleGenderChange = (gender: string, checked: boolean) => {
    if (checked) {
      setSelectedGenders(prev => [...prev, gender]);
    } else {
      setSelectedGenders(prev => prev.filter(g => g !== gender));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedGenders([]);
    setPriceRange([0, maxPrice]);
    setSortBy('name');
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Collection</h1>
        <p className="text-muted-foreground">
          Discover our beautiful range of traditional and contemporary Indian clothing
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Filters</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  {showFilters ? 'Hide' : 'Show'}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Search */}
              <div>
                <Label htmlFor="search" className="text-sm font-medium mb-2 block">Search</Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Categories</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                      />
                      <Label htmlFor={category.id} className="text-sm cursor-pointer flex-1">
                        {category.name}
                        <span className="text-muted-foreground ml-1">({category.count})</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div>
                <Label className="text-sm font-medium mb-3 block">For</Label>
                <div className="space-y-2">
                  {['women', 'men', 'kids'].map((gender) => (
                    <div key={gender} className="flex items-center space-x-2">
                      <Checkbox
                        id={gender}
                        checked={selectedGenders.includes(gender)}
                        onCheckedChange={(checked) => handleGenderChange(gender, checked as boolean)}
                      />
                      <Label htmlFor={gender} className="text-sm cursor-pointer flex-1 capitalize">
                        {gender}
                        <span className="text-muted-foreground ml-1">
                          ({products.filter(p => p.gender === gender).length})
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={maxPrice}
                  min={0}
                  step={500}
                  className="w-full"
                />
              </div>

              {/* Clear Filters */}
              <Button variant="outline" onClick={clearFilters} className="w-full">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort and Results */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </span>
              {(selectedCategories.length > 0 || selectedGenders.length > 0 || searchTerm) && (
                <Badge variant="secondary">
                  Filtered
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || selectedGenders.length > 0 || searchTerm) && (
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                    Search: "{searchTerm}" ×
                  </Badge>
                )}
                {selectedCategories.map((categoryId) => {
                  const category = categories.find(c => c.id === categoryId);
                  return (
                    <Badge 
                      key={categoryId}
                      variant="secondary" 
                      className="cursor-pointer"
                      onClick={() => handleCategoryChange(categoryId, false)}
                    >
                      {category?.name} ×
                    </Badge>
                  );
                })}
                {selectedGenders.map((gender) => (
                  <Badge 
                    key={gender}
                    variant="secondary" 
                    className="cursor-pointer capitalize"
                    onClick={() => handleGenderChange(gender, false)}
                  >
                    {gender} ×
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container py-8">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}