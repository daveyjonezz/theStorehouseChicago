const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/theStoreHouse");
 
const itemsSeed = [
  {
    item: "Grey Men's Sweater",
    price: "4",
    description: "Men's Sweatshirt, grey",
    size:["XS", "S", "M", "L", "XL", "XXL"],
    quantity:"",
    //sku:"",
    img: "https://tachyons.io/img/avatar_1.jpg"
  },
    {
    item: "White Men's Sweater",
    price: "2",
    description: "Men's Sweatshirt, white",
    size:["XS", "S", "M", "L", "XL", "XXL"],
    quantity:"",
    //sku:"",
    img: "https://i.pinimg.com/originals/40/c1/bd/40c1bd174fa0f13f6a025e6e7e44bec4.jpg"
  },
    {
    item: "Grey Women's Sweater",
    price: "4",
    description: "Women's Sweatshirt, grey",
    size:["XS", "S", "M", "L", "XL", "XXL"],
    quantity:"",
    //sku:"",
    img: 'https://i.pinimg.com/originals/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg'
  },
    {
    item: "White Women's Sweater",
    price: "4",
    description: "Women's Sweatshirt, white",
    size:["XS", "S", "M", "L", "XL", "XXL"],
    quantity:"",
    //sku:"",
    img: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/03/hairy-fluffy-cat-sky-the-ragdoll-31.jpg'
  }
  ,
  {
    item: "Donation",
    price: "",
    description: "Write in the amount you would like to donate.",
    //sku: "",
    img: 'https://i.redd.it/9h7f7yyg1su11.jpg'
  }
] 
db.items
.remove({})
.then(() => db.items.collection.insertMany(itemsSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
const usershoppingcartSeed = [
 {
     item: "Grey Men's Sweatshirt",
     img: "https://tachyons.io/img/avatar_1.jpg",
     description: "Men's Sweatshirt, grey",
     price: "4",
     size: "M",
     quantity: "1",
     date: "9/28/19"
 }
];
db.usershoppingcart
  .remove({})
  .then(() => db.usershoppingcart.collection.insertMany(usershoppingcartSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });