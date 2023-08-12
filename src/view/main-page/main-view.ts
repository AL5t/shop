import './main.css';
import { CssClasses } from '../../type/classes';
import { Tags } from '../../type/tags';
import View from '../view';
import CarouselView from './carousel/carousel-view';
import PopularView from './popular/popular-view';

export default class MainView extends View {
  constructor() {
    super();

    const carouselView = new CarouselView();
    const popularView = new PopularView();

    this.htmlElement.append(
      carouselView.getHtmlElement(),
      popularView.getHtmlElement(),
    );
  }

  protected createHtml(): HTMLElement {
    const main = document.createElement(Tags.MAIN);
    main.classList.add(CssClasses.MAIN);
    return main;
  }
}