/**
 * Dirty patch unwrap image in gridsome for waiting real solution
 *
 * @see https://github.com/gridsome/gridsome/issues/700
 */
const visit = require('unist-util-visit');

module.exports = function unwrapImage() {
  return function transform(tree) {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (node.children
        && node.children[0]
        && node.children[0].type === 'html'
        && node.children[0].url) {
        parent.children.splice(index, 1, ...node.children);
        return [visit.SKIP, index];
      }
      return [];
    });
  };
};
