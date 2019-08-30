var app = require('express')();
var http = require('http').createServer(app);

http.listen(1234, function(){
    console.log('listening on *:1234');
});

//home
app.get('/', function(req, res){
    res.sendFile('../MilesAheadMusic/index.html');
});
//about-us