import Page from '../common/page';
import MainPage from '../pages/main-page';
import CartPage from '../pages/cart';
import ProductDescriptionPage from '../pages/product-description-page';
import ErrorPage from '../pages/404-page';
import Goods from '../common/goods';
import Product from '../common/product';
import Cart from '../common/cart';

export const enum PageIds {
  MainPage = 'main-page',
  CartPage = 'cart-page',
  ProductDescriptionPage = 'product-description-page',
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private static currentProduct: Product = {
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
  };
  private static cart: Cart = new Cart();

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.CartPage) {
      page = new CartPage(idPage);
    } else if (idPage === PageIds.ProductDescriptionPage) {
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
      App.showProductList();
      App.showHeaderInfo();
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

  static setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  static showHeaderInfo() {
    const cartAmount = document.querySelector('.product-count');
    cartAmount!.textContent = `${App.cart.getAmount()}`;
    const cartTotalSum = document.querySelector('.cart-total-amount__sum');
    cartTotalSum!.textContent = `$${App.cart.getSum()}`;
  }

  private static showProductList() {
    const containerDiv = document.querySelector('.product-items');

    for (const item of Goods) {
      const itemCard = document.createElement('div');
      itemCard.className = 'big-item-card';
      const itemWrapper = document.createElement('div');
      itemWrapper.className = 'item-wrapper';
      itemWrapper.style.background = `url(${item.thumbs}) 0% 0%/cover`;
      itemCard.append(itemWrapper);
      const itemText = document.createElement('div');
      itemText.className = 'item-text';
      itemWrapper.append(itemText);
      const itemTitle = document.createElement('div');
      itemTitle.className = "item-title";
      itemTitle.textContent = item.title;
      itemText.append(itemTitle);
      const itemInfo = document.createElement('div');
      itemInfo.className = "item-info";
      itemText.append(itemInfo);
      const itemInfoItem = document.createElement('div');
      itemInfoItem.className = "item-info-item";
      itemInfo.append(itemInfoItem);

      const category = document.createElement('p');
      category.innerHTML = `<span>Category: </span>${item.category}`;
      itemInfoItem.append(category);
      const brand = document.createElement('p');
      brand.innerHTML = `<span>Brand: </span>${item.brand}`;
      itemInfoItem.append(brand);
      const price = document.createElement('p');
      price.innerHTML = `<span>Price: </span>${item.price}`;
      itemInfoItem.append(price);
      const discount = document.createElement('p');
      discount.innerHTML = `<span>Discount: </span>${item.discountPercentage}`;
      itemInfoItem.append(discount);
      const rating = document.createElement('p');
      rating.innerHTML = `<span>Rating: </span>${item.rating}`;
      itemInfoItem.append(rating);
      const stock = document.createElement('p');
      stock.innerHTML = `<span>Stock: </span>${item.stock}`;
      itemInfoItem.append(stock);

      const itemButtons = document.createElement('div');
      itemButtons.className = 'item-buttons';
      itemWrapper.append(itemButtons);
      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'add-to-cart-button';
      //addToCartButton.textContent = 'ADD TO CART';
      if (App.cart.isInCart(item.id)) {
        addToCartButton.textContent = 'DROP TO CART'
      } else {
        addToCartButton.textContent = 'ADD TO CART';
      }
      itemButtons.append(addToCartButton);
      addToCartButton.addEventListener('click', () => {
        const currentProduct: Product = {
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          discountPercentage: item.discountPercentage,
          rating: item.rating,
          stock: item.stock,
          brand: item.brand,
          category: item.category,
          thumbs: item.thumbs,
          images: item.images,
        }
        if (addToCartButton.textContent === 'ADD TO CART') {
          App.cart.addAmount();
          App.cart.addSum(currentProduct.price);
          addToCartButton.textContent = 'DROP TO CART'
          App.cart.addProduct(currentProduct);
        }
        else {
          App.cart.removeAmount();
          App.cart.removeSum(currentProduct.price);
          addToCartButton.textContent = 'ADD TO CART';
          App.cart.removeProduct(currentProduct.id);
        }
        App.showHeaderInfo();
      })
      const detailsButton = document.createElement('button');
      detailsButton.className = 'details-button';
      detailsButton.textContent = 'DETAILS';
      itemButtons.append(detailsButton);
      detailsButton.addEventListener('click', () => {
        const currentProduct: Product = {
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          discountPercentage: item.discountPercentage,
          rating: item.rating,
          stock: item.stock,
          brand: item.brand,
          category: item.category,
          thumbs: item.thumbs,
          images: item.images,
        }
        App.setCurrentProduct(currentProduct);
        const currentURL = document.URL;
        let newURL = currentURL.slice(0, currentURL.lastIndexOf('/'));
        newURL += `/#${PageIds.ProductDescriptionPage}`;
        document.location = newURL;
      })

      containerDiv?.append(itemCard);
    }
  }

  private static showProductData() {
    
    const Store: string = 'STORE';
    
    const breadCrumbs = document.querySelector('.link-navigation');
    if (breadCrumbs != null) {
      breadCrumbs.children[0].textContent = Store;
      breadCrumbs.children[2].textContent = App.currentProduct.category;
      breadCrumbs.children[4].textContent = App.currentProduct.brand;
      breadCrumbs.children[6].textContent = App.currentProduct.title;
    }
    const productTitle = document.querySelector('.product-detail__title');
    if (productTitle) {
      productTitle.textContent = App.currentProduct.title;
    }
    const productInfo = document.querySelector('.product-detail__info');
    if (productInfo) {
      productInfo.children[0].children[1].textContent = App.currentProduct.description;
      productInfo.children[1].children[1].textContent = String(App.currentProduct.discountPercentage);
      productInfo.children[2].children[1].textContent = String(App.currentProduct.rating);
      productInfo.children[3].children[1].textContent = String(App.currentProduct.stock);
      productInfo.children[4].children[1].textContent = App.currentProduct.brand;
      productInfo.children[5].children[1].textContent = App.currentProduct.category;
    }
    const price: HTMLElement|null = document.querySelector('.product-detail-order__price');
    price!.textContent = String(App.currentProduct.price);
    const cartTotalSum = document.querySelector('.cart-total-amount__sum');
    cartTotalSum!.textContent = `$${App.cart.getSum()}`;
    const cartAmount = document.querySelector('.product-count');
    if (cartAmount != null) {
      cartAmount.textContent = `${App.cart.getAmount()}`;
    }
    const bigImageDiv = document.querySelector(".product-detail__big-image");
    const smallImageDiv = document.querySelector(".product-detail__small-images");
    
    const bigImage = document.createElement('img');
    bigImage.src = App.currentProduct.images[0];
    bigImage.alt = 'product image';
    bigImage.className = 'product-big-image';
    bigImageDiv?.appendChild(bigImage);
    // Add tumbs
    for (let i: number = 0; i < App.currentProduct.images.length; i += 1) {
      const tumbsImage = document.createElement('img');
      tumbsImage.src = App.currentProduct.images[i];
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
      if (App.cart.isInCart(App.currentProduct.id)) {
        addButton.textContent = 'DROP TO CART'
      } else {
        addButton.textContent = 'ADD TO CART';
      }

      addButton.addEventListener('click', () => {
        if (addButton.textContent === 'ADD TO CART') {
          App.cart.addAmount();
          App.cart.addSum(App.currentProduct.price);
          addButton.textContent = 'DROP TO CART'
          App.cart.addProduct(App.currentProduct);
        }
        else {
          App.cart.removeAmount();
          App.cart.removeSum(App.currentProduct.price);
          addButton.textContent = 'ADD TO CART';
          App.cart.removeProduct(App.currentProduct.id);
        }
        cartAmount!.textContent = `${App.cart.getAmount()}`;
        cartTotalSum!.textContent = `$${App.cart.getSum()}`;
      })
    }
  }

  constructor() {
  }

  run() {
    console.log('run App');
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;