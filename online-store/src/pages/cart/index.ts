import Page from '../../common/page';
import PagesContent from '../../common/pages-content';

class CartPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = PagesContent.cartPage;
    return this.container;
  }
};

export default CartPage;