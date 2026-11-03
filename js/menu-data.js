import { brunchMenu } from "./data/brunch.js";
import { lunchDinnerMenu } from "./data/lunch-dinner.js";

export const menu = [
  ...brunchMenu, 
  ...lunchDinnerMenu
];