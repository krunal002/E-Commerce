import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 **/

export const products = [
  {
    _id: uuid(),
    name: "Classic Denim Shirt: Dark Blue",
    category: "men",
    isStarred: false,
    sellingPrice: 999,
    price: 1999,
    rating: 3,
    image:
      "https://th.bing.com/th/id/OIP.8tyHySloL5kTcIgXRCiaHwHaKC?pid=ImgDet&rs=1"
  },
  {
    _id: uuid(),
    name: "",
    category: "women",
    isStarred: false,
    sellingPrice: 569,
    price: 1349,
    rating: 5,
    image:
      "https://s-media-cache-ak0.pinimg.com/originals/19/72/b3/1972b3fbc96088a7a636618a1b93760a.jpg"
  },
  {
    _id: uuid(),
    name: "Solids: Light Blue Shirt",
    category: "men",
    isStarred: true,
    sellingPrice: 449,
    price: 1899,
    rating: 4,
    image:
      "https://n4.sdlcdn.com/imgs/a/1/q/Bossini-Blue-Solids-Shirt-SDL348096102-1-7b220.jpg"
  },
  {
    _id: uuid(),
    category: "men",
    isStarred: false,
    sellingPrice: 999,
    price: 2099,
    rating: 2,
    image:
      "http://3.bp.blogspot.com/-cc10rNKW514/Udo1oQT5vdI/AAAAAAAAAM0/fcyYAiS9mK4/s1600/Mens-Casual-Clothing-Styles2.jpg"
  },
  {
    _id: uuid(),
    category: "kids",
    isStarred: false,
    sellingPrice: 799,
    price: 1299,
    rating: 4,
    image:
      "https://static.parenting.com/wp-content/uploads/migrated/oxfords-holiday-fashion-plaid-dress.jpg"
  },
  {
    _id: uuid(),
    category: "women",
    isStarred: false,
    sellingPrice: 669,
    price: 1349,
    rating: 3,
    image:
      "https://s-media-cache-ak0.pinimg.com/originals/19/72/b3/1972b3fbc96088a7a636618a1b93760a.jpg"
  },
  {
    _id: uuid(),
    category: "kids",
    isStarred: false,
    sellingPrice: 899,
    price: 1949,
    rating: 5,
    image:
      "https://static.parenting.com/wp-content/uploads/migrated/oxfords-holiday-fashion-plaid-dress.jpg"
  },
  {
    _id: uuid(),
    category: "women",
    isStarred: false,
    sellingPrice: 499,
    price: 1229,
    rating: 3,
    image:
      "https://s-media-cache-ak0.pinimg.com/originals/19/72/b3/1972b3fbc96088a7a636618a1b93760a.jpg"
  }
];
