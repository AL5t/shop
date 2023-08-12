import './carousel.css';
import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';
import RightArrowView from './rightArrow/rightArrow-view';


export default class CarouselView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const carouselFrame = document.createElement(Tags.DIV);
    carouselFrame.classList.add('carousel_frame');
    
    const carouselLine = document.createElement(Tags.DIV);
    carouselLine.classList.add('carousel_line');
    for (let i = 1; i < 10; i += 1) {
      const carouselItem = document.createElement(Tags.DIV);
      carouselItem.classList.add('carousel_item');
      carouselItem.textContent = `${i}`;
      carouselLine.append(carouselItem);
    }
    
    carouselFrame.append(carouselLine);
    
    const carouselArrows = document.createElement(Tags.DIV);
    carouselArrows.classList.add('carousel_arrows');
    const carouselArrowLeft = document.createElement(Tags.DIV);
    carouselArrowLeft.classList.add('carousel_arrow', 'arrow-left');
    carouselArrowLeft.textContent = 'arrow left';
    // const carouselArrowRight = document.createElement(Tags.DIV);
    // carouselArrowRight.classList.add('carousel_arrow', 'arrow-right');
    // carouselArrowRight.textContent = 'arrow right';
    const carouselArrowRight = new RightArrowView();
    carouselArrows.append(carouselArrowLeft, carouselArrowRight.getHtmlElement());

    
    
    this.htmlElement.append(carouselFrame, carouselArrows);
  }

  protected createHtml(): HTMLElement {
    const carousel = document.createElement(Tags.SECTION);
    carousel.classList.add(CssClasses.SECTION, 'section-carousel', 'carousel');
    return carousel;
  }
}