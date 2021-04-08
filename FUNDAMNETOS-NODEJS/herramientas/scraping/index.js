const puppeteer = require('puppeteer');
try {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
            width: 1000,
            height: 1000,
            deviceScaleFactor: 1,
        });
        await page.goto('https://www.mercadolibre.com.co/');
        await page.type('input', 'Hello');
        // let boton = await page.evaluate(() => {
        //     const button = document.querySelector('div.nav-menu ul.nav-menu-list li.nav-menu-item a.nav-menu-cp.nav-menu-cp-logged')
        //     console.log(button.innerHTML)
        //     return button.innerHTML
        // })
        // EN EL CLICK DEBO IR PROBANDO POR PARTES HASTA LLEGAR AL BOTON SEGMENTAR EL QUERY SELECTOR :3
        //await page.click("/html/body/header/div/div[2]/ul/li[1]/a")
        await page.screenshot({ path: 'mercado-libre.png' });
        await browser.close();
    })().catch(e => console.log(e))

} catch (error) {
    console.log(error)
}
