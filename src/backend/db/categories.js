import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    pic:"https://img.freepik.com/premium-photo/valentine-s-day-background-with-paper-heartsgenerative-ai_841229-1986.jpg",
    categoryName: "love",
    description:
      "Love is a canvas furnished by nature and embroidered by imagination",
  },
  
  {
    _id: uuid(),
    pic:"https://assets-news.housing.com/news/wp-content/uploads/2022/01/24192402/Vastu-tips-to-light-Diwali-diyas-shutterstock_474656347.jpg",
    categoryName: "festival",
    description:
      "During festivals, let us set aside our differences and come together in the spirit of harmony",
  },
  
  {
    _id: uuid(),
    pic:"https://stylesatlife.com/wp-content/uploads/2022/10/Simple-Colourful-Flower-Cake-Design.jpg",
    categoryName: "birthday",
    description:
      "Beginning of a new chapter filled with love, happiness, and fulfillment in every aspect of life"
  },
];
