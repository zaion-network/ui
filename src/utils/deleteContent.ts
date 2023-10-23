/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export interface deleteContent {
  (content: HTMLElement): Promise<boolean>;
}

export const deleteContent: deleteContent = async content => {
  if (content.firstChild) {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
  return true;
};
