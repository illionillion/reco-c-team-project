export interface Drink {
  did: number;
  vid: number;
  product_name: string;
  price: string;
  temp: 'hot' | 'cold';
  category:
    | 'soda'
    | 'sports'
    | 'can'
    | 'tea'
    | 'coffee'
    | 'water'
    | 'juice'
    | 'energy';
  url: string;
}
