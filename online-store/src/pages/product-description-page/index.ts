class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbs: string;
  images: string[];

  constructor() {
    this.id = 1,
    this.title = "iPhone 9",
    this.description = "An apple mobile which is nothing like apple",
    this.price = 549,
    this.discountPercentage = 12.96,
    this.rating = 4.69,
    this.stock = 94,
    this.brand = "Apple",
    this.category = "smartphones",
    this.thumbs = "https://i.dummyjson.com/data/products/1/thumbnail.jpg";
    this.images = [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
    ]
  }
}
class Cart {
  amount: number;
  sum: number;

  constructor() {
    this.amount = 0;
    this.sum = 0;
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
}
const Store: string = 'STORE';
const product: any = new Product;
const cart = new Cart;

const breadCrumbs = document.querySelector('.link-navigation');
breadCrumbs.children[0].textContent = Store;
breadCrumbs.children[2].textContent = product.category;
breadCrumbs.children[4].textContent = product.brand;
breadCrumbs.children[6].textContent = product.title;

const productTitle = document.querySelector('.product-detail__title');
productTitle.textContent = product.title;

const productInfo = document.querySelector('.product-detail__info');
productInfo.children[0].children[1].textContent = product.description;
productInfo.children[1].children[1].textContent = product.discountPercentage;
productInfo.children[2].children[1].textContent = product.rating;
productInfo.children[3].children[1].textContent = product.stock;
productInfo.children[4].children[1].textContent = product.brand;
productInfo.children[5].children[1].textContent = product.category;