import './header.css';
import { CssClasses } from '../../type/classes';
import { Tags } from '../../type/tags';
import View from '../view';
import BurgerMenuView from './burgerMenu/burgerMenu-view';
import LogoView from './logo/logo-view';
import NavView from './nav/nav-view';


export default class HeaderView extends View {
  constructor() {
    super();

    const burgerMenuView = new BurgerMenuView();
    const logoView = new LogoView();
    const navView = new NavView();

    this.htmlElement.append(
      burgerMenuView.getHtmlElement(),
      logoView.getHtmlElement(),
      navView.getHtmlElement(),
    );
  }

  protected createHtml(): HTMLElement {
    const header = document.createElement(Tags.HEADER);
    header.classList.add(CssClasses.HEADER);
    return header;
  }
}