import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Mens street outfits",
    price: 2233,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
   categoryName: "men",
    image: "https://i.pinimg.com/564x/59/88/db/5988db35d63851e890384c9ff6ed2743.jpg",
    rating: 4.1
  },
  {
    _id: uuid(),
    title: "Mens Cotton Jacket",
    price: 5539,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
   categoryName: "men",
    image: "https://i.pinimg.com/564x/8c/09/22/8c09223231b62b25be8d74806dab374f.jpg",
    rating: 4.7
  },
  {
    _id: uuid(),
    title: "Men's Basic Overly Over Sized T-Shirt",
    price: 13549,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
   categoryName: "men",
    image: "https://i.pinimg.com/564x/06/36/f7/0636f7aa529ef7eae4f8330568afdf1d.jpg",
    rating: 2.1
  },
  {
    _id: uuid(),
    title: "Mens Basic Lapel Long Sleeve Casual Shirt",
    price: 1549,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
   categoryName: "men",
    image: "https://i.pinimg.com/564x/99/12/ef/9912eff44d2a689ab3dc3ecfd222e115.jpg",
    rating: 2.5
  },
  {
    _id: uuid(),
    title: "Women Hoodies Zip Up Pocket Oversized",
    price: 5656.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure.",
    categoryName: "women",
    image: "https://i.pinimg.com/564x/51/d5/75/51d5757667868489f1eee7b9ef5fd4da.jpg",
    rating: 2.6
  },
  {
    _id: uuid(),
    title: "women winter wearing",
    price: 3000,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    categoryName: "women",
    image: "https://i.pinimg.com/564x/c3/aa/45/c3aa4518fdd9de1e17439286c56d3d20.jpg",
    rating: 3.7
  },
  {
    _id: uuid(),
    title: "Loose Plaid Style Fleece Hoodie",
    price: 3500,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    categoryName: "women",
    image: "https://i.pinimg.com/564x/5a/91/23/5a912391178daca317da7b4faa02228b.jpg",
    rating: 3.8
  },
  {
    _id: uuid(),
    title: "Opna Women's Short Sleeve Moisture",
    price: 3400,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    categoryName: "women",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: 4.5
  },
  {
    _id: uuid(),
    title: "Womens T Shirt Casual Cotton Short",
    price: 3400,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    categoryName: "women",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: 3.6
  },
{
  _id: uuid(),
  title: "Baby Organic Cotton Sleep & Play",
  price: "1200",
  image:'https://i.pinimg.com/564x/90/e8/7b/90e87bd79e5e99aa2a4af2191badf571.jpg',
  rating: 2.5,
  description: "Cuddle baby up in this soft, certified organic cotton rib one piece. Made for daily adventures in tummy time, nap time and beyond, this sleep & play is budding with thoughtful details like snaps from",
  categoryName: "kids",
},
{
  _id: uuid(),
  title: "Baby ZIP SUITS",
  price: "1700",
  image:'https://i.pinimg.com/564x/1c/12/2b/1c122b4cce8a5d9181ca20e57ef414c9.jpg',
  description: 'Full of comfort and full of charm. Dress baby in this thoughtfully crafted 2-piece set that features a cozy waffle-knit design, banded cuffs and an exclusive seasonal print. Plus, this set is made' ,
  rating: 1.5,
  categoryName: "kids",
},
{
  _id: uuid(),
  title: 'Baby Organic Cotton Knit 2-Piece Set',
  price: "5000",
  image: 'https://i.pinimg.com/564x/f0/a6/3f/f0a63f4548638ccaa011e8f9c8cb208e.jpg',
  description:"Full of comfort and full of charm. Dress baby in this thoughtfully crafted 2-piece set that features a cozy waffle-knit design, banded cuffs and an exclusive seasonal print. Plus, this set is made",
  rating: 3.5,
  categoryName: "kids",
},
{
  _id: uuid(),
  title: "Baby boy winter outfits",
  price: "3000",
  image:'https://i.pinimg.com/564x/90/2e/f5/902ef571c68e58b555219f06647df145.jpg',
  description: "Shop for baby clothing, baby necessities and essentials at Carters.com, the most trusted name in baby, kids, and toddler clothing. Shop our selection of cute baby & kids clothing.",
  rating: 3.8,
  categoryName: "kids",
},
{
  _id: uuid(),
  title: "NEIGHBORHOOD x adidas Run City Pack",
  price: "1400",
  image:'https://i.pinimg.com/564x/3c/af/73/3caf7300e8c2eef8311929948e5a6b8b.jpg',
  description:"The NEIGHBORHOOD x adidas Run City Pack will release on Black Friday, the 29th of November. Check adidas.com and select adidas dealers to find the collection. Running offers unparalleled…",
  rating: 4.5,
  categoryName: "sports",
},
{
  _id: uuid(),
  title: "Nike Sport Clash graphic t-shirt in black",
  price: "1400",
  image:"https://i.pinimg.com/564x/3d/2a/fc/3d2afcd4242a471b40dd1e9bfde38838.jpg",
  rating: 4.5,
  description:"T-shirt by Nike Workout mode: activated Crew neck Raglan sleeves Nike logo print Regular fit",
  categoryName: "sports",
},
{
  _id: uuid(),
  title: "Men's Workwear Outfit",
  price: "1400",
  image:'https://i.pinimg.com/564x/49/9c/35/499c354527b9456d1c71f71a917cedaf.jpg',
  rating: 4.5,
  description:"Top: Drop-Cut: LUX Polo Pants: Everyday Pant 2.0 Shoes: Lido Knit Shoes",
  categoryName: "sports",
},
{
  _id: uuid(),
  title: "Puma logo woven shorts",
  price: "1400",
  image:'https://i.pinimg.com/564x/63/71/5e/63715ec0552b33483db8a1677acfe83c.jpg',
  rating: 4.5,
  description:"Shorts by PUMA Make some legroom Regular rise Elasticated waist Side pockets PUMA logo print to leg Branded patch to reverse Regular fit True to size",
  categoryName: "sports",
},

];
