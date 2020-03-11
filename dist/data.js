(function (root) {
  const dataNodes = new Map();

  const data = function (node, name, value) {
    if (name !== undefined) {
      if (!dataNodes.has(node)) dataNodes.set(node, new Map());
      const dataNode = dataNodes.get(node);
      if (value === undefined) {
        retorno = dataNode.get(name);
      } else {
        dataNode.set(name, value);
        retorno = value;
      }
    } else {
      retorno = dataNodes.get(node)
    }
    return retorno;
  };

  data.version = '1.0Alpha';

  const dataEach = function (nodes, name, value) { 
    return Array.prototype.map.call(nodes, function (item) {
      return item.data(name, value);
    });
  };

  HTMLElement.prototype.data = function (name, value) {
    return data(this, name, value);
  };

  NodeList.prototype.data = function (name, value) {
    return dataEach(this, name, value)
  };

  HTMLCollection.prototype.data = function (name, value) {
    return dataEach(this, name, value)
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) module.exports = data;
    exports.data = data;
  } else {
    root.data = data;
  }
}(this));