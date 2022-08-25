const http = require('http');
const fs = require('fs');

//const { MongoClient } = require('mongodb');


//const uri = "mongodb+srv://<username>:<password>@sandbox.cpyrl.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});

http.createServer(function (req, res) {
    
    fs.readFile('www/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
