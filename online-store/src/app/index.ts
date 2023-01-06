import Page from '../common/page';
import MainPage from '../pages/main-page';
//import CartPage from '../cart-page';
import ProductDescriptionPage from '../pages/product-description-page';
//import Header from '../../core/components/header';*/
import ErrorPage from '../pages/404-page';

export const enum PageIds {
  MainPage = 'main-page',
  CartPage = 'cart-page',
  ProductDescriptionPage = 'product-description-page',
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
//  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    }/* else if (idPage === PageIds.CartPage) {
      page = new CartPage(idPage);
    }*/ else if (idPage === PageIds.ProductDescriptionPage) {
      page = new ProductDescriptionPage(idPage);
    } else {
      page = new ErrorPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }

    if (idPage === PageIds.MainPage) {
      
    } else if (idPage === PageIds.CartPage) {
      
    } else if (idPage === PageIds.ProductDescriptionPage) {
      App.showProductData();
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  private static showProductData() {
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
    if (breadCrumbs != null) {
      breadCrumbs.children[0].textContent = Store;
      breadCrumbs.children[2].textContent = product.category;
      breadCrumbs.children[4].textContent = product.brand;
      breadCrumbs.children[6].textContent = product.title;
    }
    const productTitle = document.querySelector('.product-detail__title');
    if (productTitle) {
      productTitle.textContent = product.title;
    }
    const productInfo = document.querySelector('.product-detail__info');
    if (productInfo) {
      productInfo.children[0].children[1].textContent = product.description;
      productInfo.children[1].children[1].textContent = product.discountPercentage;
      productInfo.children[2].children[1].textContent = product.rating;
      productInfo.children[3].children[1].textContent = product.stock;
      productInfo.children[4].children[1].textContent = product.brand;
      productInfo.children[5].children[1].textContent = product.category;
    }
    const price: HTMLElement|null = document.querySelector('.product-detail-order__price');
      price!.textContent = product.price;
    const cartTotalSum = document.querySelector('.cart-total-amount__sum');
    const cartAmount = document.querySelector('.product-count');
    if (cartAmount != null) {
      cartAmount.textContent = `${cart.getAmount()}`;
    }
    const bigImageDiv = document.querySelector(".product-detail__big-image");
    const smallImageDiv = document.querySelector(".product-detail__small-images");
    
    const bigImage = document.createElement('img');
    bigImage.src = product.images[0];
    bigImage.alt = 'product image';
    bigImage.className = 'product-big-image';
    bigImageDiv?.appendChild(bigImage);
    // Add tumbs
    for (let i: number = 0; i < product.images.length; i += 1) {
      const tumbsImage = document.createElement('img');
      tumbsImage.src = product.images[i];
      tumbsImage.alt = `product small image ${i}`;
      tumbsImage.className = 'product-small-image';
    
      tumbsImage.addEventListener('click', () => {
        bigImageDiv?.removeChild(bigImageDiv.firstChild!);
        bigImage.src = tumbsImage.src;
        bigImage.alt = 'product image';
        bigImage.className = 'product-big-image';
        bigImageDiv?.appendChild(bigImage);
      })
      smallImageDiv?.appendChild(tumbsImage);
    }
    
    const addButton = document.querySelector('.product-detail-order__cart-operation');
    if (addButton != null) {
      addButton.addEventListener('click', () => {
        if (addButton.textContent === 'ADD TO CART') {
          cart.addAmount();
          cart.addSum(product.price);
          addButton.textContent = 'DROP TO CART'
        }
        else {
          cart.removeAmount();
          cart.removeSum(product.price);
          addButton.textContent = 'ADD TO CART';
        }
        cartAmount!.textContent = `${cart.getAmount()}`;
        cartTotalSum!.textContent = `$${cart.getSum()}`;
      })
    }
  }

  constructor() {
  //  this.header = new Header('header', 'header-container');
  }

  run() {
    console.log('run App');
  //  App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;