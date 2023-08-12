import '../carousel.css';
// import { CssClasses } from '../../../../type/classes';
import { Tags } from '../../../../type/tags';
import View from '../../../view';

export default class RightArrowView extends View {
  /* eslint-disable */
  constructor() {
    super();
  }

  protected createHtml(): HTMLElement {
    const carouselArrowRight = document.createElement(Tags.DIV);
    carouselArrowRight.classList.add('carousel_arrow', 'arrow-right');
    carouselArrowRight.textContent = 'arrow right';
    return carouselArrowRight;
  }
}