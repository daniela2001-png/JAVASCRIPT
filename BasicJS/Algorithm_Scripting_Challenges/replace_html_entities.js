/*
Scripting de algoritmo intermedio: convertir entidades HTML
Convertir los caracteres &, <, >, "(comillas dobles) y '(apóstrofe), en una cadena a sus entidades HTML correspondientes.

*/

function convertHTML(str) {
    let HTML = {
        "&": '&amp;',
        "<": "&lt;",
        ">": '&gt;',
        "'": '&apos;',
        '"': '&quot;'
    }
    for (let key in HTML) {
        if (str.includes(key)) {
            str = str.replaceAll(key, HTML[key])
        }
    }
    return str
}

console.log(convertHTML("Schindler's List")) // Schindler&apos;s List
