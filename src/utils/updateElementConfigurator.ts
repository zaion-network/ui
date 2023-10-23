import type { stringToJsHtmlConfigurator } from "./stringToJsHtmlConfigurator";
import type { attach } from "./attach";
import type { deleteContent } from "./deleteContent";

export interface updateElement {
  (htmlstring: string): void;
}

export interface updateElementConfigurator {
  (
    parser: DOMParser,
    attach: attach,
    deleteContent: deleteContent,
    stringToJsHtmlConfigurator: stringToJsHtmlConfigurator,
    baseElementId?: string
  ): updateElement;
}

export const updateElementConfigurator: updateElementConfigurator =
  (
    parser,
    attach,
    deleteContent,
    stringToJsHtmlConfigurator,
    baseElementId = "content"
  ) =>
  htmlstring => {
    const content = document.getElementById(baseElementId);
    deleteContent(content!);
    const nodes = stringToJsHtmlConfigurator(parser)(htmlstring);
    attach(content!, nodes);
  };
