import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 **/

export const products = [
  {
    _id: uuid(),
    name: "Classic Brown",
    category: "men",
    isStarred: false,
    sellingPrice: 999,
    price: 1999,
    delivery: 0,
    rating: 3,
    image:
      "https://www.parivarceremony.com/media/catalog/product/cache/14a1553305c404c221b3f13f50c007dd/p/1/p1031mw37.jpg"
  },
  {
    _id: uuid(),
    name: "Floral Print",
    category: "kids",
    isStarred: false,
    sellingPrice: 499,
    price: 1229,
    delivery: 10,
    rating: 3,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17045988/2022/2/4/0d9dcffa-936e-4129-a098-e184862a1e9d1643958755775pspeachesMagentaFloralA-LineDress1.jpg"
  },
  {
    _id: uuid(),
    name: "Poly Georgette",
    category: "women",
    isStarred: false,
    sellingPrice: 569,
    price: 1349,
    delivery: 30,
    rating: 5,
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230518/Q6BR/64657e4b42f9e729d7951370/-473Wx593H-463086147-blue-MODEL.jpg"
  },
  {
    _id: uuid(),
    name: "Western Meta Blue",
    category: "men",
    isStarred: true,
    sellingPrice: 449,
    price: 1899,
    delivery: 0,
    rating: 4,
    image:
      "https://www.parivarceremony.com/media/catalog/product/cache/14a1553305c404c221b3f13f50c007dd/m/w/mw1036_6.jpg"
  },
  {
    _id: uuid(),
    name: "Denim teal",
    category: "men",
    isStarred: false,
    sellingPrice: 999,
    price: 2099,
    delivery: 0,
    rating: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0047/7727/9617/products/1J8A1084-Copy_600x.jpg?v=1673346022"
  },
  {
    _id: uuid(),
    name: "Casual Mix",
    category: "kids",
    isStarred: false,
    sellingPrice: 799,
    price: 1299,
    delivery: 50,
    rating: 4,
    image:
      "https://www.okboss.co.in/assets/img/home/boysrow1/kids%20musterd%20jacket%20with%20white%20tshirt%20party%20wear%20dress.jpg"
  },
  {
    _id: uuid(),
    name: "Rayon Anarkali",
    category: "women",
    isStarred: false,
    sellingPrice: 669,
    price: 1349,
    delivery: 20,
    rating: 3,
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7723403/2018/11/12/b6938891-c168-444c-ab87-2ee2230af79f1542013784945-Nayo-Women-Dresses-5761542013784748-1.jpg"
  },
  {
    _id: uuid(),
    name: "Denim Dress",
    category: "kids",
    isStarred: false,
    sellingPrice: 899,
    price: 1949,
    delivery: 0,
    rating: 5,
    image:
      "https://assets0.mirraw.com/images/11323760/Foil_Wine_Gown_Front_COLOR_large_m.jpg?1678951122"
  },
  {
    _id: uuid(),
    name: "Fit & Flare",
    category: "women",
    isStarred: false,
    sellingPrice: 499,
    price: 1229,
    delivery: 20,
    rating: 3,
    image:
      "https://img3.junaroad.com/uiproducts/19701690/pri_175_p-1681281932.jpg"
  },
  {
    _id: uuid(),
    name: "Hooded Tracksuit",
    category: "kids",
    isStarred: false,
    sellingPrice: 599,
    price: 1229,
    delivery: 0,
    rating: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0253/9628/1399/products/boy-hooded-tracksuit-clothes-set-kids-clothing-sets-4-6-8-10-12-14-year-red-4t-kids-586.jpg?v=1637546205&width=1445"
  },
  {
    _id: uuid(),
    name: "Italian Fabric",
    category: "men",
    isStarred: false,
    sellingPrice: 999,
    price: 1299,
    delivery: 30,
    rating: 3,
    image:
      "https://5.imimg.com/data5/NM/FT/TI/ANDROID-77896561/product-jpeg-500x500.jpg"
  },
  {
    _id: uuid(),
    name: "Skirt Midi",
    category: "women",
    isStarred: false,
    sellingPrice: 799,
    price: 899,
    delivery: 10,
    rating: 3,
    image:
      "https://www.lulus.com/images/product/xlarge/8678381_1788456.jpg?w=195&hdpi=1"
  }
];
