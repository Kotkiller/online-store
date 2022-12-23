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
const Store: string = 'STORE';
const product: any = new Product;

const breadCrumbs = document.querySelector('.link-navigation');
breadCrumbs.children[0].textContent = Store;
breadCrumbs.children[2].textContent = product.category;
breadCrumbs.children[4].textContent = product.brand;
breadCrumbs.children[6].textContent = product.title;