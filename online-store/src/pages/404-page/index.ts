import Page from '../../common/page';
import PagesContent from '../../common/pages-content';

class ErrorPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.innerHTML = PagesContent.ErrorPage;
    return this.container;
  }
}

export default ErrorPage;