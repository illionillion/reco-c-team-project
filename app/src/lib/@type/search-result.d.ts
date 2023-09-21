import type { Drink } from './drink';
import type { VendingType } from './vending';

export interface SearchResult {
  address: VendingType['address'];
  vid: VendingType['id'];
  location_x: VendingType['location_x'];
  location_y: VendingType['location_y'];
  pay: VendingType['pay'];
  did: Drink['did'];
  product_name: Drink['product_name'];
  price: Drink['price'];
  temp: Drink['temp'];
  category: Drink['category'];
  url: Drink['url'];
}
