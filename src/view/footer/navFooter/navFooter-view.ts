import './navFooter.css';
// import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class NavFooterView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const itemTop = document.createElement(Tags.DIV);
    itemTop.classList.add('itemTop');
    itemTop.textContent = 'Catalog';
    const itemMid = document.createElement(Tags.DIV);
    itemMid.classList.add('itemMid');
    itemMid.textContent = 'Contacts';
    const itemBottom = document.createElement(Tags.DIV);
    itemBottom.classList.add('itemBottom');
    itemBottom.textContent = 'About Us';
    this.htmlElement.append(itemTop, itemMid, itemBottom);
  }

  protected createHtml(): HTMLElement {
    const navFooter = document.createElement(Tags.NAV);
    navFooter.classList.add('nav-footer');
    return navFooter;
  }
}