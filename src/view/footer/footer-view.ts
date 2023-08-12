import './footer.css';
import { CssClasses } from '../../type/classes';
import { Tags } from '../../type/tags';
import View from '../view';
import NavFooterView from './navFooter/navFooter-view';
import LogoView from '../header/logo/logo-view';
import LinksView from './links/links-view';

export default class FooterView extends View {
  constructor() {
    super();

    const navFooterView = new NavFooterView();
    const logoView = new LogoView();
    const linksView = new LinksView();

    this.htmlElement.append(
      navFooterView.getHtmlElement(),
      logoView.getHtmlElement(),
      linksView.getHtmlElement(),
    );
  }

  protected createHtml(): HTMLElement {
    const footer = document.createElement(Tags.FOOTER);
    footer.classList.add(CssClasses.FOOTER);
    return footer;
  }
}