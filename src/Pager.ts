/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import page from "page";
import {
  stringToJsHtmlConfigurator,
  stringToJsHtml,
} from "./utils/stringToJsHtmlConfigurator";
import {
  updateElement,
  updateElementConfigurator,
} from "./utils/updateElementConfigurator";
import { attach } from "./utils/attach";
import { deleteContent } from "./utils/deleteContent";

export interface iPager {
  parser: DOMParser;
  updateElement: updateElement;
  stringToJsHtml: stringToJsHtml;
  // createRoute(setupper: updateElement): void;
  route(page: string, cb: PageJS.Callback): this;
  callbackMaker(page: string, htmlContent: string): () => void;
}
export interface Pager {
  parser: DOMParser;
  stringToJsHtml: stringToJsHtml;
  updateElement: updateElement;
  // route(page: string, cb: PageJS.Callback): this;
  // createRoute(setupper: updateElement): void;
  // callbackMaker(page: string, htmlContent: string): void;
}
export class Pager implements iPager {
  constructor(options: { parser: DOMParser }) {
    this.parser = options.parser;
    this.stringToJsHtml = stringToJsHtmlConfigurator(this.parser);
    this.updateElement = updateElementConfigurator(
      this.parser,
      attach,
      deleteContent,
      stringToJsHtmlConfigurator
    );
  }
  route(route: string, callback: PageJS.Callback) {
    page(route, callback);
    return this;
  }
  resolve() {
    page();
  }
  /**
   * Crea una callback partendo da un route e un contenuto html
   * Esempio
   * ```js
   * const pager = new Page()
   * const about = pager.callbackMaker(someHtmlContent)
   * pager.route("/about",about)
   * ```
   * @param htmlContent è il contenuto html che verrà parsato e trasformato in nodi html
   * @returns la callback da passare a page
   */
  callbackMaker(htmlContent: string): () => void {
    return () => {
      this.updateElement(htmlContent);
    };
  }
}
export namespace Page {}
