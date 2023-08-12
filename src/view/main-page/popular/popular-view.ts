import './popular.css';
import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class PopularView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const popularTitle = document.createElement('h2');
    popularTitle.classList.add('section_title', 'section-popular_title');
    popularTitle.textContent = 'Popular';
    const popularItems = document.createElement(Tags.DIV);
    popularItems.classList.add('popular_items');
    for (let i = 0; i < 8; i += 1) {
      const popularItem = document.createElement(Tags.DIV);
      popularItem.classList.add('popular_item');
      popularItems.append(popularItem);
    }
    const popularLink = document.createElement(Tags.DIV);
    popularLink.classList.add('popular_link');
    popularLink.textContent = 'Search ALL';
    this.htmlElement.append(popularTitle, popularItems, popularLink);
  }

  protected createHtml(): HTMLElement {
    const popular = document.createElement(Tags.SECTION);
    popular.classList.add(CssClasses.SECTION, 'section-popular');
    return popular;
  }
}