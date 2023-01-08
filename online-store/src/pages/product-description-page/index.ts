import Page from '../../common/page';
import PagesContent from '../../common/pages-content';
import Product from '../../common/product';


class ProductDescriptionPage extends Page {
  private product: Product;
  constructor(id: string) {
    super(id);
    this.product = {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbs: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",]
    }
  }

  public setProduct(product: Product) {
    this.product = product;
  }

  render() {
    this.container.innerHTML = PagesContent.productDescriptionPage; 
    return this.container;
  }
}

export default ProductDescriptionPage;