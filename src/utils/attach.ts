/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export interface attach {
  (element: HTMLElement, nodes: NodeListOf<ChildNode>): void;
}

export const attach: attach = (element, nodes) => {
  nodes.forEach(n => element.appendChild(n));
};
