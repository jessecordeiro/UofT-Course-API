var express = require('express');
var app = express();
// var router = require('./router.js');
var https = require('https');

var commonHeader = {'Content-Type': 'text/plain'};
var array = ['org', 'code', 'section', 'studyyear', 'daytime', 'weekday', 'prof', 'breadth', 'online', 'waitlist', 'available', 'title']
var data = "";

var validate = function(request, response){
  for (obj in array){
    var index = array[obj];
    if (request.query[index] === undefined){
      request.query[index] = "";
    }
    if (obj == array.length -1){
      var str = "";
      writeResponse = function(resp) {
            resp.on('data', function (chunk) {
                  str += chunk;
            });
            resp.on('end', function () {
                  response.end(str);
            });
      }
      https.request(`https://timetable.iit.artsci.utoronto.ca/api/courses?org=${request.query.org}&code=${request.query.code}&section=${request.query.section}&studyyear=${request.query.studyyear}&daytime=${request.query.daytime}&weekday=${request.query.weekday}&prof=${request.query.prof}&breadth=${request.query.breadth}&online=${request.query.online}&waitlist=${request.query.waitlist}&available=${request.query.available}&title=${request.query.title}`, writeResponse).end();
    }
  }
}

app.get("/courses", function (request, response){
  response.writeHead(200, commonHeader);
  validate(request, response, function(val){
    response.end(val);
  });

  // router.home(request, response);
})
app.listen(process.env.PORT || 3000);
console.log('Server running at http://127.0.0.1:3000/');
