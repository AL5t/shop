import './links.css';
// import { CssClasses } from '../../../type/classes';
import { Tags } from '../../../type/tags';
import View from '../../view';

export default class LinksView extends View {
  constructor() {
    super();
    this.configureHtml();
  }

  private configureHtml() {
    const tiktok = document.createElement(Tags.DIV);
    tiktok.classList.add('tiktok');
    tiktok.textContent = 'tiktok';
    const vk = document.createElement(Tags.DIV);
    vk.classList.add('vk');
    vk.textContent = 'vk';
    const telegram = document.createElement(Tags.DIV);
    telegram.classList.add('telegram');
    telegram.textContent = 'telegram';
    const youtube = document.createElement(Tags.DIV);
    youtube.classList.add('youtube');
    youtube.textContent = 'youtube';
    this.htmlElement.append(tiktok, vk, telegram, youtube);
  }

  protected createHtml(): HTMLElement {
    const links = document.createElement(Tags.DIV);
    links.classList.add('links');
    return links;
  }
}