var http = require('http');
var https = require('https');

var port = 3000;

console.log('Listening on port ' + port);

http.createServer(function (client_request, client_response) {
    console.log('REQUEST: {' + client_request.method + '} ' + client_request.url);
    var proxy_request = https.request({
        hostname: 'timetable.iit.artsci.utoronto.ca',
        path: '/api' + client_request.url,
        method: client_request.method
    }, function (proxy_response) {
        proxy_response.pipe(client_response, { end: true });
    });
    client_request.pipe(proxy_request, { end: true });
}).listen(port);