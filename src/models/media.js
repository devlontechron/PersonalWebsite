// src/models/Media.js
export default class Media {
  /**
   * @param {Object} o
   * @param {string} o.title          – name of the media item (required)
   * @param {string[]} o.links        – array of URLs (at least one)
   */
  constructor({ title, links = [] }) {
    if (!title)     throw new Error('Media needs a title');
    if (!Array.isArray(links) || links.length === 0)
      throw new Error('Media needs at least one link');

    this.title = title;
    this.links = links;
  }

  /** Return the first link (common shortcut) */
  primary() {
    return this.links[0];
  }
}
