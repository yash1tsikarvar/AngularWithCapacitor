/**
 * Convert value returned by getElementsByClassName to an array of HTML Elements
 *
 * @param {HTMLCollectionOf<Element>} nodeList
 * @returns {HTMLElement[]}
 */
export function nodeListToArray(nodeList: HTMLCollectionOf<Element>): HTMLElement[] {
  return Array.apply(null, {length: nodeList.length})
    .map((item, index) => nodeList.item(index));
}
