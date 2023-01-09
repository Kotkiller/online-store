import Product from "./product";

class Cart {
  private amount: number;
  private sum: number;
  private goods: Product[];

  constructor() {
    this.amount = 0;
    this.sum = 0;
    this.goods = [];
  }
  addAmount() {
    this.amount += 1;
  }
  removeAmount() {
    this.amount -= 1;
  }
  addSum(value: number) {
    this.sum += value;
  }
  removeSum(value: number) {
    this.sum -= value;
  }
  getAmount() {
    return this.amount;
  }
  getSum() {
    return this.sum;
  }
  addProduct(product: Product) {
    this.goods.push(product);
    console.log(this.goods);
  }
  removeProduct(productID: number) {
    let newGoods = [];
    for (let item of this.goods) {
      if (item.id != productID) {
        newGoods.push(item);
      }  
    this.goods = newGoods;  
    }
    console.log(this.goods);
  }
  isInCart(productID: number) {
    for (let item of this.goods) {
      if (item.id === productID) {
        return true;
      }  
    }  
    return false; 
  }
}

export default Cart;