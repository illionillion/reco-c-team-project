/**
 * 自販機
 */
export interface VendingType {
  /**
   * 住所
   */
  address: string;
  /**
   * id
   */
  id: number;
  /**
   * 緯度
   */
  lat: string;
  location_x: string;
  /**
   * 経度
   */
  lng: string;
  location_y: string;
  /**
   * 支払い方法
   */
  pay: 'cash' | 'cashress';
}
