/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export interface stringToJsHtml {
  (string: string): NodeListOf<ChildNode>;
}
export interface stringToJsHtmlConfigurator {
  (parser: DOMParser): stringToJsHtml;
}
export const stringToJsHtmlConfigurator: stringToJsHtmlConfigurator =
  parser => string => {
    const element = parser.parseFromString(string, "text/html");
    return element.body.childNodes;
  };
