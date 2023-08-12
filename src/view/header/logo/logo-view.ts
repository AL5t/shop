import './logo.css';
// import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class LogoView extends View {
  /* eslint-disable*/
  constructor() {
    super();
  }

  protected createHtml(): HTMLElement {
    const logo = document.createElement(Tags.H1);
    logo.classList.add('logo');
    logo.textContent = 'AVA';
    return logo;
  }
}