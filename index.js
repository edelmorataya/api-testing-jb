
const express= require('express');

const  app = express ();
const request = require('request');

app.use(express.json());

const infos = [
    {id:1, name: 'Info1'},
    {id:2, name: 'Info2'},
    {id:3, name: 'Info3'}
];

const posts = require('./posts')

app.get('/posts', (req, res) =>
{
    res.json(posts)

});

app.get('/', (req, res) =>
{
    res.send("api running")
});


app.get('/api/infos', (req, res) =>
{
    res.send(infos)
});


app.post('/api/infos', (req, res) =>
{
    //console.log(req.body);
    //res.json(req.body);
    //res.append(req.body.post)

    const info =  req.body
   

    infos.push(info);
    res.send(info);

   // req.json(req.body);
   // res.send(req.body);
    
}
);

const api = [];
const excs = [];
const saves = [];
const publishes = [];
const validates = [];
const stops = [];

app.get('/api/', (req, res) =>
{
    res.send(api)
});

app.post('/api/', (req, res) =>
{
    const ap =  req.body
    api.push(ap);
    res.send(ap);
}
);

app.get('/api/execute', (req, res) =>
{
    res.send(excs)
});

app.post('/api/execute', (req, res) =>
{
    const exc =  req.body
    excs.push(exc);
    res.send(exc);

    request.post({
        headers: {'content-type' : 'application/json'},
        url:     'https://eocgejvahrstc0y.m.pipedream.net/execute',
        body:    req.body
      }, function(error, response, body){
        console.log(body);
      });
}
);



/*request.post('https://eocgejvahrstc0y.m.pipedream.net/execute', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
*/







app.get('/api/publish', (req, res) =>
{
    res.send(publishes)
});


app.post('/api/publish', (req, res) =>
{
    const publi =  req.body
    publishes.push(publi);
    res.send(publi);
}
);


app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
