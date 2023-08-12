import './nav.css';
import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class NavView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const search = document.createElement(Tags.DIV);
    search.classList.add('search');
    search.textContent = 'search';
    const account = document.createElement(Tags.DIV);
    account.classList.add('account');
    account.textContent = 'account';
    const basket = document.createElement(Tags.DIV);
    basket.classList.add('basket');
    basket.textContent = 'basket';
    this.htmlElement.append(search, account, basket);
  }

  protected createHtml(): HTMLElement {
    const nav = document.createElement(Tags.NAV);
    nav.classList.add(CssClasses.NAV);
    return nav;
  }
}