/*
Programación funcional: comprender los peligros de usar un código imperativo

La programación funcional es un buen hábito. Mantiene su código fácil de administrar y le evita errores furtivos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para resaltar dónde puede tener problemas.

En inglés (y en muchos otros idiomas), el tiempo imperativo se usa para dar órdenes. De manera similar, un estilo imperativo en programación es aquel que le da a la computadora un conjunto de declaraciones para realizar una tarea.

A menudo, las declaraciones cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un forbucle que da instrucciones exactas para iterar sobre los índices de una matriz.

Por el contrario, la programación funcional es una forma de programación declarativa. Le dices a la computadora lo que quieres que se haga llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes, por lo que no es necesario que escriba cómo debe realizarlas la computadora. Por ejemplo, en lugar de usar el forciclo mencionado anteriormente, puede llamar al mapmétodo que maneja los detalles de iterar sobre una matriz. Esto ayuda a evitar errores semánticos, como los "Errores Off By One" que se trataron en la sección Depuración.

Considere el escenario: está navegando por la web en su navegador y desea rastrear las pestañas que ha abierto. Intentemos modelar esto usando un código simple orientado a objetos.

Un objeto Ventana se compone de pestañas y normalmente tiene más de una Ventana abierta. Los títulos de cada sitio abierto en cada objeto de ventana se mantienen en una matriz. Después de trabajar en el navegador (abrir nuevas pestañas, fusionar ventanas y cerrar pestañas), desea imprimir las pestañas que aún están abiertas. Las pestañas cerradas se eliminan de la matriz y se agregan nuevas pestañas (para simplificar) al final de la misma.

El editor de código muestra una implementación de esta funcionalidad con las funciones para tabOpen(), tabClose()y join(). La matriz tabses parte del objeto Window que almacena el nombre de las páginas abiertas.

Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, provocando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenada en finalTabs.tabs, debería ser, ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']pero la lista producida por el código es ligeramente diferente.

Cambie Window.prototype.tabClose para que elimine la pestaña correcta.

*/

// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line

    var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);