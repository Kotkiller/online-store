var Product = /** @class */ (function () {
    function Product() {
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
        ];
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.amount = 0;
        this.sum = 0;
    }
    Cart.prototype.addAmount = function () {
        this.amount += 1;
    };
    Cart.prototype.removeAmount = function () {
        this.amount -= 1;
    };
    Cart.prototype.addSum = function (value) {
        this.sum += value;
    };
    Cart.prototype.removeSum = function (value) {
        this.sum -= value;
    };
    Cart.prototype.getAmount = function () {
        return this.amount;
    };
    Cart.prototype.getSum = function () {
        return this.sum;
    };
    return Cart;
}());
var Store = 'STORE';
var product = new Product;
var cart = new Cart;
var breadCrumbs = document.querySelector('.link-navigation');
breadCrumbs.children[0].textContent = Store;
breadCrumbs.children[2].textContent = product.category;
breadCrumbs.children[4].textContent = product.brand;
breadCrumbs.children[6].textContent = product.title;
var productTitle = document.querySelector('.product-detail__title');
productTitle.textContent = product.title;
var productInfo = document.querySelector('.product-detail__info');
productInfo.children[0].children[1].textContent = product.description;
productInfo.children[1].children[1].textContent = product.discountPercentage;
productInfo.children[2].children[1].textContent = product.rating;
productInfo.children[3].children[1].textContent = product.stock;
productInfo.children[4].children[1].textContent = product.brand;
productInfo.children[5].children[1].textContent = product.category;
var price = document.querySelector('.product-detail-order__price');
price.textContent = product.price;
var cartTotalSum = document.querySelector('.cart-total-amount__sum');
var cartAmount = document.querySelector('.product-count');
cartAmount.textContent = "".concat(cart.getAmount());
var bigImageDiv = document.querySelector(".product-detail__big-image");
var smallImageDiv = document.querySelector(".product-detail__small-images");
var bigImage = document.createElement('img');
bigImage.src = product.images[0];
bigImage.alt = 'product image';
bigImage.className = 'product-big-image';
bigImageDiv === null || bigImageDiv === void 0 ? void 0 : bigImageDiv.appendChild(bigImage);
var _loop_1 = function (i) {
    var tumbsImage = document.createElement('img');
    tumbsImage.src = product.images[i];
    tumbsImage.alt = "product small image ".concat(i);
    tumbsImage.className = 'product-small-image';
    tumbsImage.addEventListener('click', function () {
        bigImageDiv === null || bigImageDiv === void 0 ? void 0 : bigImageDiv.removeChild(bigImageDiv.firstChild);
        bigImage.src = tumbsImage.src;
        bigImage.alt = 'product image';
        bigImage.className = 'product-big-image';
        bigImageDiv === null || bigImageDiv === void 0 ? void 0 : bigImageDiv.appendChild(bigImage);
    });
    smallImageDiv === null || smallImageDiv === void 0 ? void 0 : smallImageDiv.appendChild(tumbsImage);
};
// Add tumbs
for (var i = 0; i < product.images.length; i += 1) {
    _loop_1(i);
}
var addButton = document.querySelector('.product-detail-order__cart-operation');
addButton.addEventListener('click', function () {
    if (addButton.textContent === 'ADD TO CART') {
        cart.addAmount();
        cart.addSum(product.price);
        addButton.textContent = 'DROP TO CART';
    }
    else {
        cart.removeAmount();
        cart.removeSum(product.price);
        addButton.textContent = 'ADD TO CART';
    }
    cartAmount.textContent = "".concat(cart.getAmount());
    cartTotalSum.textContent = "$".concat(cart.getSum());
});
