import { Drink } from "../@type/drink";
import { VendingType } from "../@type/vending";

/**
 * キャッシュレスか現金かを判定
 * @param pay
 * @returns
 */
export const translatePay = (pay: VendingType["pay"]) => {
  switch (pay) {
    case "cashress":
      return "キャッシュレス";
    case "cash":
      return "現金";
    default:
      return "~";
  }
};
/**
 * 「つめたい」か「あたたかい」かを判定
 * @param temp
 * @returns
 */
export const translateTemp = (temp: Drink["temp"]) => {
  switch (temp) {
    case "cold":
      return "つめたい";
    case "hot":
      return "あたかい";
    default:
      return "~";
  }
};
/**
 * カテゴリーを判定
 * @param category 
 * @returns 
 */
export const translateCategory = (category: Drink["category"]) => {
  switch (category) {
    case "soda":
      return "炭酸";
    case "can":
      return "缶";
    case "coffee":
      return "コーヒー";
    case "energy":
      return "エナジードリンク";
    case "juice":
      return "ジュース";
    case "sports":
      return "スポーツドリンク";
    case "tea":
      return "茶";
    case "water":
      return "水";
    default:
      return "~";
  }
};
