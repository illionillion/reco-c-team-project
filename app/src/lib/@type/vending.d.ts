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
  /**
   * 経度
   */
  lng: string;
  /**
   * 支払い方法
   */
  pay: 'cash' | 'cashress';
}
