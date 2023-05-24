import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    pic:"https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2018/06/men-shopping-masculine.jpg?quality=90&strip=all&ssl=1",
    categoryName: "men",
    description:
      "Being perfectly well-dressed gives one a tranquillity that no religion can bestow.",
  },
  {
    _id: uuid(),
    pic:"https://tse4.mm.bing.net/th?id=OIP.0X0V7n6Rp-6mt2MK8_ZW-gHaE8&pid=Api&P=0&h=180",
    categoryName: "kids",
    description:
      "Make your baby more unique with our best fabric and latest clothes designs."
  },
  {
    _id: uuid(),
    pic:"https://www.rakuten.com/blog/wp-content/uploads/2016/08/how-to-shop-end-of-summer-sales-like-a-pro.jpg",
    categoryName: "women",
    description:
      "Every woman deserves a little glamour in her life—and we can help you get it!",
  },
  
];
