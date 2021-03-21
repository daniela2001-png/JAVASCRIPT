#!/usr/bin/node

/*

ENTENDIENDO ASYNC AWAIT

*/
async function daniela() {
    const hi = await new Promise((resolve, reject) => { resolve("HI ME EJECUTARE DE SEGUNDAS") })
    const hi3 = await new Promise((resolve, reject) => { resolve("HI ME EJECUTARE DE 3RAS") })
    console.log(hi)
    console.log(hi3)
}

daniela()
async function daniela2() {
    console.log("ME EJECUTO DE 1RAS")
}
daniela2()
