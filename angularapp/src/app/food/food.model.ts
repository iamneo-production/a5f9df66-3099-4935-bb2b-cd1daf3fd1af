export class FoodItemClass {
    img: string;
    name: string;
    category: string;
    price: string;
  
    constructor(img: string, name: string, category: string, price: string) {
      this.img = img;
      this.name = name;
      this.category = category;
      this.price = price;
    }
  }