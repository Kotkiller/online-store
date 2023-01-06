import Page from '../../common/page';
import PagesContent from '../../common/pages-content';

class CartPage extends Page {

  constructor(id: string) {
    super(id);
  }

  addData() {
    const Store: string = 'STORE';
    console.log(Store);
  }

  render() {
    this.container.innerHTML = PagesContent.cartPage;
    return this.container;
  }
};

export default CartPage;