# DATA NODE
Es una pequeña librería que agrega un método llamado 'data' a todos los Nodos del DOM, el cual se usa para almacenar cualquier tipo de data.

## Sintaxis
```javascript
// Asignación por Nodo
Node.data(IdData, ValueData)

// Asignación por función global
window.data(Node, IdData, ValueData)
```

- **Node**: Es el Nodo del DOM seleccionado.
- **IdData**: El identificador de la data a guardar, normalmente es de tipo 'string'
- **ValueData**: Valor de la data a ser almacenada, puede ser de tipo:
  - String
  - Boolean
  - Object
  - Array
  - Function
  - Null
  - Mapa
  - Set

## Ejemplo
Un simple HTML
```html
<div>My DIV</div>
<p>Some paragraph</p>
<ul>
  <li>One</li>
  <li id="item">Two</li>
  <li>three</li>
</ul>
```
#### Asignación
```javascript
// My DIV by selector
const myDiv = document.querySelector('div');
myDiv.data('secret', 'value ultra secret XD');

// My Item by ID
const myItem = document.getElementById('item');
myItem.data('order', false);

// Setting data in NodeList
document.querySelectorAll('li').data('item', true);

// Setting data type 'function' by TagName
const someParagraph = document.getElementsByTagName('P')[0];
someParagraph.data('resumen', function () {
  console.log("I'm some paragraph")
});
```
#### Obtención
Tomando en cuenta el código JS de arriba:
```javascript
myDiv.data();
// =>
Map {
  secret: 'value ultra secret XD'
}
```

```javascript
myDiv.data('secret');
// =>
'value ultra secret XD'
```

```javascript
document.querySelectorAll('li').data('item');
// =>
Array(3) [ false, false, false ]
```

```javascript
someParagraph.data('resumen')
// =>
function () {
 console.log("I'm some paragraph")
}

// Y para ejecutar:
someParagraph.data('resumen')()
// =>
"I'm some paragraph"
```
