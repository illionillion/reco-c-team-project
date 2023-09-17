export interface VendingType {
  address: string;
  id: number;
  location_x: number;
  location_y: number;
  pay: "cash" | "card";
}
