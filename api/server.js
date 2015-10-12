var Hapi 	= require('hapi');
var server 	= new Hapi.Server();
var Path = require('path');

/* $lab:coverage:off$ */
server.connection({
    host: 'localhost',
    port: process.env.PORT || 3000
});
/* $lab:coverage:on$ */

//Pathing for our jade templates
server.views({
        engines: {
            jade: require('jade')
        },
        path: Path.join(__dirname, '../views')
    });
