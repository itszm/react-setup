
export default class PxUtil {
  /**
   * Find a parent element by traversing up.
   * @param  {object} child     - dom element
   * @param  {string} selector  - selector to find parent. e.g. '#id123' or '.content' or 'div'
   * @return {object}           - return parent dom element
   */
  static findParentByChild(child, selector) {
    let el = child;
    let isClassName = (selector[0] === '.' ? true : false);
    let isId = (selector[0] === '#' ? true : false);
    if (isId || isClassName) {
      selector = selector.slice(1);
    }
    el = el.parentElement;
    while (el) {
      let classes = el.getAttribute('class');
      // console.log(isId, el.getAttribute('id'), isClassName, classes);
      if ((isId && el.getAttribute('id') === selector) ||
          (isClassName && classes && classes.split(' ').indexOf(selector) >= 0) ||
          (el.tagName === selector.toUpperCase())) {
            break;
      }
      el = el.parentElement;
    }
    return el;
  }

  /**
   * Toggle element by setting display style to 'block' or 'none'
   * @example - toggle({ overlayEl, show: false });
   * @param  {object} param - object parameter { name: domEl, show: boolean }
   */
  static toggle(param) {
    const el = param[ Object.keys(param)[0] ]; // first param object.
    el.style.display = (param.show ? 'block' : 'none');
  }
}
