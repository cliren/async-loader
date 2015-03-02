import * as scriptLoader from './script-loader';

let AsyncLoader = {
  /**
   * loads a JavaScript module by its exported name
   * @param {String} name name of exported source module
   * @param {String} path relative or absolute path of a module
   * @returns {Object} a promise
   */
  load: function(name, path) {
    return scriptLoader.loadScript(name, path);
  }
};

export default AsyncLoader;