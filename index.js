
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

    const info = {

        id: infos.lenth +1,
        name : req.body.post
    };

    infos.push(info);
    res.send(info);

   // req.json(req.body);
   // res.send(req.body);
    
}
);


app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
