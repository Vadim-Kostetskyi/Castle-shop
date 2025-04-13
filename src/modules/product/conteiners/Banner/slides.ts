import product1_x2 from "assets/product/product1@2.png";
import product2_x2 from "assets/product/product2@2.png";
import product3_x2 from "assets/product/product3@2.png";
import product1 from "assets/product/product1.png";
import product2 from "assets/product/product2.png";
import product3 from "assets/product/product3.png";
import { SlidesProps } from ".";

export const slides: SlidesProps[] = [
  {
    id: 0,
    text: "Golden Hour Glam",
    image: product1_x2,
    imageSmall: product1,
  },
  {
    id: 1,
    text: "Autumn Eleganse",
    image: product2_x2,
    imageSmall: product2,
  },
  {
    id: 2,
    text: "No Limits",
    image: product3_x2,
    imageSmall: product3,
  },
];
