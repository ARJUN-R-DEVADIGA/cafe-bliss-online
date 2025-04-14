
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  tags?: string[];
}

export const menuCategories = [
  'Hot Drinks',
  'Cold Drinks',
  'Bakery',
  'Breakfast',
  'Lunch',
  'Desserts'
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Rich, concentrated coffee served in a small cup',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1621555470436-d36e9683bdb4?q=80&w=400',
    category: 'Hot Drinks',
    featured: true,
    tags: ['classic', 'coffee']
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=400',
    category: 'Hot Drinks',
    featured: true,
    tags: ['popular', 'coffee']
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with steamed milk',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=400',
    category: 'Hot Drinks',
    tags: ['popular', 'coffee']
  },
  {
    id: 4,
    name: 'Iced Coffee',
    description: 'Chilled coffee served with ice',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400',
    category: 'Cold Drinks',
    featured: true,
    tags: ['refreshing', 'summer']
  },
  {
    id: 5,
    name: 'Cold Brew',
    description: 'Coffee brewed with cold water for 12+ hours',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1581996323441-538096e8f2a6?q=80&w=400',
    category: 'Cold Drinks',
    tags: ['strong', 'refreshing']
  },
  {
    id: 6,
    name: 'Croissant',
    description: 'Buttery, flaky pastry',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400',
    category: 'Bakery',
    featured: true,
    tags: ['classic', 'breakfast']
  },
  {
    id: 7,
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with blueberries',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1607958996333-41790f996118?q=80&w=400',
    category: 'Bakery',
    tags: ['sweet', 'fruit']
  },
  {
    id: 8,
    name: 'Avocado Toast',
    description: 'Sourdough toast with smashed avocado, salt and pepper',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1603046891744-1f75ef5d2896?q=80&w=400',
    category: 'Breakfast',
    featured: true,
    tags: ['healthy', 'popular']
  },
  {
    id: 9,
    name: 'Breakfast Sandwich',
    description: 'Egg, cheese, and bacon on an English muffin',
    price: 6.75,
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=400',
    category: 'Breakfast',
    tags: ['filling', 'protein']
  },
  {
    id: 10,
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken with romaine, parmesan, and Caesar dressing',
    price: 9.25,
    image: 'https://images.unsplash.com/photo-1626700051075-6261d8ffb4e8?q=80&w=400',
    category: 'Lunch',
    tags: ['protein', 'filling']
  },
  {
    id: 11,
    name: 'Caprese Panini',
    description: 'Fresh mozzarella, tomatoes, and basil on pressed ciabatta',
    price: 8.75,
    image: 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?q=80&w=400',
    category: 'Lunch',
    featured: true,
    tags: ['vegetarian', 'italian']
  },
  {
    id: 12,
    name: 'Chocolate Chip Cookie',
    description: 'Warm cookie with melty chocolate chips',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400',
    category: 'Desserts',
    tags: ['sweet', 'classic']
  }
];
