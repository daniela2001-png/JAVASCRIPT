const sharp = require('sharp')

sharp('./MEME.png')
    .rotate()
    .resize(80)
    .toFile('image_80x80.png')
    .then(data => { console.log(data)})
    .catch(err => { console.log(err) });
