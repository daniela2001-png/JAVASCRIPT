/*
Programación funcional: aplique la programación funcional para convertir cadenas en slugs de URL
Los últimos desafíos cubrieron una serie de métodos útiles de matriz y cadena que siguen principios de programación funcional. También hemos aprendido acerca de reduceun método poderoso que se utiliza para reducir los problemas a formas más simples. Desde el cálculo de promedios hasta la clasificación, cualquier operación de matriz se puede lograr aplicándola. Recordemos que mapy filterson casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de administración de contenido (CMS) tienen los títulos de una publicación agregados a parte de la URL para propósitos simples de marcadores. Por ejemplo, si escribe una publicación de Medium titulada "Dejar de usar Reducir", es probable que la URL tenga alguna forma de la cadena del título ("... / dejar de usar Reducir"). Es posible que ya lo hayas notado en el sitio freeCodeCamp.

Complete la urlSlugfunción para que convierta una cadena titley devuelva la versión con guión de la URL. Puede usar cualquiera de los métodos cubiertos en esta sección y no los use replace. Estos son los requisitos:

La entrada es una cadena con espacios y palabras en mayúsculas y minúsculas.

La salida es una cadena con los espacios entre palabras reemplazados por un guión ( -)

La salida debe ser todas letras minúsculas

La salida no debe tener espacios.

*/

// Only change code below this line
function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
// Only change code above this line
console.log(urlSlug(" Winter Is Coming")) // winter-is-coming
