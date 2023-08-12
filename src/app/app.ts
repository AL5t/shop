import './style.css';
import HeaderView from '../view/header/header-view';
import MainView from '../view/main-page/main-view';
import FooterView from '../view/footer/footer-view';

export default class App {
  constructor() {
    this.createViews();
  }

  createViews() {
    const headerView = new HeaderView();
    const header = headerView.getHtmlElement();

    const footerView = new FooterView();
    const footer = footerView.getHtmlElement();

    const mainView = new MainView();
    const main = mainView.getHtmlElement();

    document.body.append(header, main, footer);
  }
}