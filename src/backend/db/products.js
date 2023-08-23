import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 **/

export const products = [
  // love
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Love Heart Design",
    desc:"Your love has transformed my life in ways I never thought possible.",
    category: "love",
    isStarred: false,
    sellingPrice: 799,
    price: 1499,
    delivery: 0,
    rating: 4,
    image:
      "https://rianshstore.com/cdn/shop/products/PNZ6MluGnt_560x700.jpg?v=1650608405"
  },
  // festival
  {
    _id: uuid(),
    status:"Trendy",
    name: "Teacher's Day",
    desc:"Your impact is immeasurable, leaving an indelible mark on our hearts and minds.",
    category: "festival",
    isStarred: false,
    sellingPrice: 499,
    price: 1299,
    delivery: 30,
    rating: 5,
    image:
      "https://images.template.net/106279/free-sample-teacher-s-day-card-template-smcvu.jpg"
  },
  // festival
  {
    _id: uuid(),
    status:"Available",
    name: "Diwali Wishesh",
    desc:"May we embrace the true spirit of Diwali by extending a helping hand and bringing smiles to the faces of others.",
    category: "festival",
    isStarred: false,
    sellingPrice: 299,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://www.oneindia.com/diwali-greetings/images/greeting-04.jpg"
  },
  // anniversary
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Couple Greeting",
    desc:"Today marks another year of love, commitment, and beautiful memories shared between two extraordinary souls.",
    category: "anniversary",
    isStarred: false,
    sellingPrice: 699,
    price: 1229,
    delivery: 10,
    rating: 3,
    image:
      "https://mrbrownbakery.com/image/images/mPnGXLMuOb14f6EXsFpFY2S7BcKg9oPGwffH3QSg.jpeg?p=full"
  },
  // love
  {
    _id: uuid(),
    status:"Trendy",
    name: "Valentine Special Card",
    desc:" Together, we create a tapestry of love, woven with trust, respect, and unwavering commitment. ",
    category: "love",
    isStarred: false,
    sellingPrice: 99,
    price: 299,
    delivery: 0,
    rating: 2,
    image:
      "https://i.etsystatic.com/15314864/r/il/24729c/3625689556/il_570xN.3625689556_q2xf.jpg"
  },

  // birthday
  {
    _id: uuid(),
    status:"Out of Stock",
    name: "Casual Mix Card",
    desc:"Each year is a new chapter, filled with opportunities for growth, love, and fulfillment.",
    category: "birthday",
    isStarred: false,
    sellingPrice: 199,
    price: 299,
    delivery: 50,
    rating: 4,
    image:
      "https://cdn.diys.com/wp-content/uploads/2016/08/Paper-doily-cupcake-card.jpg"
  },
  // festival
  {
    _id: uuid(),
    status:"Few Left",
    name: "Merry X-mas",
    desc:"As the magical spirit of Christmas fills the air, I send my warmest wishes for a joyous and enchanting holiday season.",
    category: "festival",
    isStarred: false,
    sellingPrice: 799,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://m.media-amazon.com/images/I/81O0tOA0-zL._AC_UF894,1000_QL80_.jpg"
  },
  
  // festival
  {
    _id: uuid(),
    status:"Trendy",
    name: "Celebrate Colours",
    desc:"Indulge in delicious sweets and delicacies, sharing laughter and stories that create everlasting memories.",
    category: "festival",
    isStarred: false,
    sellingPrice: 499,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://images.meesho.com/images/products/73705812/ociry_512.webp"
  },
  
  // birthday
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Mom's Special",
    desc:"You have a remarkable ability to make everyone around you feel loved and cherished.",
    category: "birthday",
    isStarred: false,
    sellingPrice: 149,
    price: 349,
    delivery: 20,
    rating: 3,
    image:
      "https://images-cdn.ubuy.co.in/633fedbc4bdfa04f9a5b10e6-hallmark-birthday-greeting-card-for-mom.jpg"
  },
  // festival
  {
    _id: uuid(),
    status:"Few Left",
    name: "favorite Teacher",
    desc:"I want to express my deepest gratitude for your unwavering dedication and commitment to nurturing young minds.",
    category: "festival",
    isStarred: false,
    sellingPrice: 399,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-teachers-day-vertical-poster-template_23-2149064463.jpg?w=2000"
  },
  // anniversary
  {
    _id: uuid(),
    status:"Out of Stock",
    name: "Dedicated Couple",
    desc:"In each passing year, your love deepens and grows, like a well-nurtured garden blossoming into a breathtaking oasis. ",
    category: "anniversary",
    isStarred: false,
    sellingPrice: 99,
    price: 199,
    delivery: 10,
    rating: 3,
    image:
      "https://i.pinimg.com/236x/33/44/30/334430377cf4c4746e222adc53df684b--marriage-anniversary-happy-anniversary.jpg"
  },
  // birthday
  {
    _id: uuid(),
    status:"Trendy",
    name: "Kids cafted",
    desc:"A colorful bouquet of blooming flowers, vibrant and lively, catches your attention.",
    category: "birthday",
    isStarred: false,
    sellingPrice: 299,
    price: 949,
    delivery: 0,
    rating: 3,
    image:
      "https://i1.wp.com/www.skiptomylou.org/wp-content/uploads/2014/08/Kids-birthday-card-craft-ideas-1.jpg"
  },
  // festival
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Diwali Card",
    desc:"May the aroma of festive sweets and delicacies fill the air, creating memories that will be cherished for years to come.",
    category: "festival",
    isStarred: false,
    sellingPrice: 149,
    price: 899,
    delivery: 10,
    rating: 5,
    image:
      "https://i.pinimg.com/originals/3a/b7/a0/3ab7a023dbddcb4fbbb9c1bdbe0e4eca.png"
  },
  // anniversary
  {
    _id: uuid(),
    status:"Few Left",
    name: "Tilted Heart",
    desc:"Your relationship is a true inspiration, a shining example of what love and dedication can achieve.",
    category: "anniversary",
    isStarred: false,
    sellingPrice: 99,
    price: 229,
    delivery: 0,
    rating: 3,
    image:
      "https://m.media-amazon.com/images/I/71c+GMs-rFL.jpg"
  },
  // love
  {
    _id: uuid(),
    status:"Out of Stock",
    name: "Full of Love",
    desc:"I am endlessly grateful for the way you understand me, accepting every aspect of who I am. ",
    category: "love",
    isStarred: true,
    sellingPrice: 449,
    price: 1899,
    delivery: 0,
    rating: 4,
    image:
      "https://i.pinimg.com/originals/2e/f6/25/2ef62511d8fb4139928ea3dfa9442ad6.png"
  },
  // festival
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Teacher Special",
    desc:"I want to express my deepest gratitude for your unwavering dedication and commitment to nurturing young minds.",
    category: "festival",
    isStarred: false,
    sellingPrice: 799,
    price: 899,
    delivery: 10,
    rating: 5,
    image:
      "https://i0.wp.com/naetaze.com/wp-content/uploads/2021/09/0001-8646667899_20210925_222327_0000.jpg?resize=576%2C1024&ssl=1"
  },
  // festival
  {
    _id: uuid(),
    status:"Trendy",
    name: "Celebrate Colours",
    desc:"Indulge in delicious sweets and delicacies, sharing laughter and stories that create everlasting memories.",
    category: "festival",
    isStarred: false,
    sellingPrice: 699,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://m.media-amazon.com/images/I/61qGv4IypxL._AC_UF1000,1000_QL80_.jpg"
  },
  // festival
  {
    _id: uuid(),
    status:"Few Left",
    name: "Diwali Special",
    desc:"May Diwali bring happiness, prosperity, and boundless joy into your lives.",
    category: "festival",
    isStarred: false,
    sellingPrice: 299,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/003/353/816/original/diwali-day-festivity-with-mandala-free-vector.jpg"
  },
  // love
  {
    _id: uuid(),
    status:"Best Seller",
    name: "Paper Cut Love Card",
    desc:"Our love transcends time and space, connecting us on a profound level that words cannot fully capture.",
    category: "love",
    isStarred: false,
    sellingPrice: 499,
    price: 1229,
    delivery: 20,
    rating: 3,
    image:
      "https://i.etsystatic.com/8576830/r/il/76842c/1136141946/il_fullxfull.1136141946_1bjd.jpg"
  },
  // birthday
  {
    _id: uuid(),
    status:"Out of Stock",
    name: "Handmade Craft",
    desc:"On this special day, the world celebrates the day you graced us with your presence.",
    category: "birthday",
    isStarred: false,
    sellingPrice: 569,
    price: 1349,
    delivery: 30,
    rating: 2,
    image:
      "https://flowerportal.in/wp-content/uploads/2021/09/Birthday-Greeting-Card.jpg"
  },
];
