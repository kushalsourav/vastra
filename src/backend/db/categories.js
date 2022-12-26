import { v4 as uuid } from "uuid";
import men from '../../assets/img/product-1.jpeg';
import women from '../../assets/img/product-2.jpg';
import kids from '../../assets/img/product-3.png';
import sports from '../../assets/img/product-4.jpg';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image: men,
    categoryName: "men",
  },
  {
    _id: uuid(),
    image:women,
    categoryName: "women",
  },
  {
    _id: uuid(),
    image:kids,
    categoryName: "kids",
  },
  {
    _id: uuid(),
    image : sports,
    categoryName: "sports",
  },
];