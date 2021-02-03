// simple Express.js RESTful API
'use strict';

const
    port = 8888,
    express = require('express'),
    app = express();

// /hello/ GET request
// el parametro name sera opcional : ?
app.get('/hello/:name?/', (req, res) =>
    res.json(
        { message: `Hello ${req.params.name || 'world'}!` }
    )
);


// start server
app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
