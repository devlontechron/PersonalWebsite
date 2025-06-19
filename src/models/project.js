// src/models/Project.js
export default class Project {
  /**
   * @param {Object} o
   * @param {string} o.title – short name of the project (required)
   * @param {string} o.about – longer blurb or description
   * @param {string|null} [o.image] – URL or relative path to an image
   * @param {string|null} [o.link]  – external URL (site, repo, PDF…)
   */
  constructor({ title, about, image = null, link = null }) {
    if (!title) throw new Error('Project needs a title');
    this.title = title;
    this.about = about;
    this.image = image;
    this.link  = link;
  }

  /** `true` if this project has any clickable link */
  hasLink() {
    return Boolean(this.link);
  }
}
