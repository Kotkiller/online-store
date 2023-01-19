import Page from '../../common/page';
import PagesContent from '../../common/pages-content';

class MainPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render(){
    this.container.innerHTML = PagesContent.mainPage;
    return this.container;
  }
}

export default MainPage;