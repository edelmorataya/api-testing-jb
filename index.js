
const express= require('express');

const  app = express ();

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

const excs = [];
const saves = [];
const publishes = [];
const validates = [];
const stops = [];

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
    res.send(publishes)
});


app.post('/api/publish', (req, res) =>
{
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
    stops.push(sto);
    res.send(sto);
}
);





app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
