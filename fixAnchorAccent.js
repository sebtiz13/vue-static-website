const visit = require('unist-util-visit');

module.exports = function fixIdAccent() {
  return function transform(tree) {
    visit(tree, 'heading', (node) => {
      // eslint-disable-next-line no-param-reassign
      const data = node.data || (node.data = {});
      const props = data.hProperties || (data.hProperties = {});

      if (props.id) {
        const id = props.id.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        data.id = id;
        props.id = id;
      }
    });
  };
};
