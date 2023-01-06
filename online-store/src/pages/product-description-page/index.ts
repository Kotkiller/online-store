import Page from '../../common/page';
import PagesContent from '../../common/pages-content';

class ProductDescriptionPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = PagesContent.productDescriptionPage; 
    return this.container;
  }
}

export default ProductDescriptionPage;