
const express= require('express');

const  app = express ();

app.use(express.json());

var fs = require('fs');

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
}
);

app.get('/api/save', (req, res) =>
{
    res.send(saves)
});


app.post('/api/save', (req, res) =>
{
    const sav =  req.body
    saves.push(sav);
    res.send(sav);
}
);


app.get('/api/publish', (req, res) =>


{

    try{
    fs.appendFile('/posts', res, function (err) {
        
        if (err) throw err;
        console.log('Saved!');
      });

    } catch (e) {res.send(e)}


      console.log(res);

      console.log('*******');
  
      console.log(req);

    res.send(publishes)

});


app.post('/api/publish', (req, res) =>
{

    try{
        fs.appendFile('mynewfile1.txt', "JSON.stringify(res)", function (err) {
            
            if (err) throw err;
            console.log('Saved!');
          });
    
        } catch (e) {res.send(e)}
    
    console.log(res);

    console.log('*******');

    console.log(req);

    const publi =  req.body
    publishes.push(publi);
    res.send(publi);


}
);

app.get('/api/validate', (req, res) =>
{
    res.send(validates)
});


app.post('/api/validate', (req, res) =>
{
    const vali =  req.body
    validates.push(vali);
    res.send(vali);
}
);

app.get('/api/stop', (req, res) =>
{
    res.send(stops)
});


app.post('/api/stop', (req, res) =>
{
    const sto =  req.body
    stoheps.push(sto);
    res.send(sto);
}
);





app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
