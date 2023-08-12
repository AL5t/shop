export default abstract class View {
  protected htmlElement: HTMLElement;

  constructor() {
    this.htmlElement = this.createHtml();
  }

  getHtmlElement() {
    return this.htmlElement;
  }

  protected abstract createHtml<T>(param?: T): HTMLElement;
}