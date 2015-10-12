var Path = require('path');
var jade = require('jade');

module.exports = [

    {
        method: 'GET',
        path: '/public/css/{filename}',
        config: {auth: {mode: 'optional'} },
        handler: function(request, reply) {
            reply.file(__dirname + "/../public/css/" + request.params.filename);
        }
    },

    {
        method: 'GET',
        path: '/public/lib/{filename}',
        config: {auth: {mode: 'optional'} },
        handler: function(request, reply) {
            reply.file(__dirname + "/../public/lib/" + request.params.filename);
        }
    },

];