(function (root) {
  /**
   * Vault de data de los Nodos
   */
  const dataNodes = new Map();

  /**
   * Función principal para el almacenaje de la data en un Nodo
   * @param {HTMLElement} node Nodo del DOM
   * @param {String|Boolean|Object|Array|Function} name Identificador de la data
   * @param {String|Boolean|Object|Array|Function} value Valor de la data
   */
  const data = function (node, name, value) {
    if (name !== undefined) {
      if (!dataNodes.has(node)) dataNodes.set(node, new Map());
      // getting the value of the data called...
      const dataNode = dataNodes.get(node);
      if (value === undefined) {
        retorno = dataNode.get(name);
      } else {
        // saving data in the name...
        dataNode.set(name, value);
        retorno = value;
      }
    } else {
      retorno = dataNodes.get(node)
    }
    return retorno;
  };

  data.version = '1.0Alpha';

  /**
   * Función iteradora para el almacenaje de la data.
   * @param {NodeList} nodes Lista de nodos
   * @param {String|Boolean|Object|Array|Function} name Identificador de la data
   * @param {String|Boolean|Object|Array|Function} value Valor de la data
   */
  const dataEach = function (nodes, name, value) { 
    return Array.prototype.map.call(nodes, function (item) {
      return item.data(name, value);
    });
  };
  
  /**
   * Función extensiva del prototipo del HTMLElement
   * @param {String|Boolean|Object|Array|Function} name Identificador de la data
   * @param {String|Boolean|Object|Array|Function} value Valor de la data
   */
  HTMLElement.prototype.data = function (name, value) {
    return data(this, name, value);
  };

  /**
   * Función extensiva del prototipo del NodeList
   * @param {String|Boolean|Object|Array|Function} name Identificador de la data
   * @param {String|Boolean|Object|Array|Function} value Valor de la data
   */
  NodeList.prototype.data = function (name, value) {
    return dataEach(this, name, value)
  };

  /**
   * Función extensiva del prototipo del HTMLCollection
   * @param {String|Boolean|Object|Array|Function} name Identificador de la data
   * @param {String|Boolean|Object|Array|Function} value Valor de la data
   */
  HTMLCollection.prototype.data = function (name, value) {
    return dataEach(this, name, value)
  };

  /**
   * Exportación de la función principal
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) module.exports = data;
    exports.data = data;
  } else {
    root.data = data;
  }
}(this));