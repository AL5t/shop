import './catalog.css';
import { CssClasses } from '../../type/classes';
import { Tags } from '../../type/tags';
import View from '../view';

export default class CatalogView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const catalogTitle = document.createElement('h2');
    catalogTitle.classList.add('section_title', 'section-catalog_title');
    catalogTitle.textContent = 'Catalog';
    const catalogItems = document.createElement(Tags.DIV);
    catalogItems.classList.add('catalog_items');
    for (let i = 0; i < 12; i += 1) {
      const catalogItem = document.createElement(Tags.DIV);
      catalogItem.classList.add('catalog_item');
      catalogItems.append(catalogItem);
    }
    const catalogLink = document.createElement(Tags.DIV);
    catalogLink.classList.add('catalog_link');
    catalogLink.textContent = 'Search ALL';
    this.htmlElement.append(catalogTitle, catalogItems, catalogLink);
  }

  protected createHtml(): HTMLElement {
    const catalog = document.createElement(Tags.SECTION);
    catalog.classList.add(CssClasses.SECTION, 'section-catalog');
    return catalog;
  }
}