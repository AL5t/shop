import './burgerMenu.css';
import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class BurgerMenuView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const menuBurgerLine = document.createElement(Tags.SPAN);
    menuBurgerLine.classList.add('menu-burger__line');
    this.htmlElement.append(menuBurgerLine);
  }

  protected createHtml(): HTMLElement {
    const burgerMenu = document.createElement(Tags.DIV);
    burgerMenu.classList.add(CssClasses.BURGERMENU);
    return burgerMenu;
  }
}