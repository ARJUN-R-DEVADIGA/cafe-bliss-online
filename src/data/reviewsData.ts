
export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  content: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    date: '2024-04-02',
    rating: 5,
    content: "Absolutely love the atmosphere and coffee at Café Bliss! The cappuccino is perfect and the staff are always welcoming. My go-to spot for morning meetings.",
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Michael Chen',
    date: '2024-03-25',
    rating: 4,
    content: "Great selection of pastries and the cold brew is exceptional. The only reason I didn't give 5 stars is because it can get quite crowded during peak hours.",
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    date: '2024-03-18',
    rating: 5,
    content: "The avocado toast here is to die for! I've tried many cafes in the area and Café Bliss definitely has the best breakfast options. Highly recommend!",
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 4,
    name: 'David Wilson',
    date: '2024-03-10',
    rating: 4,
    content: "I visit weekly for their croissants. They're always fresh and buttery. The coffee is good too, though sometimes the espresso can be a bit bitter.",
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 5,
    name: 'Olivia Park',
    date: '2024-02-28',
    rating: 5,
    content: "This place has the perfect ambiance for getting work done. The wifi is reliable, the chairs are comfortable, and the lattes keep me going!",
    avatar: 'https://i.pravatar.cc/150?img=9'
  }
];
