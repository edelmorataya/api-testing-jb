
const express= require('express');

const  app = express ();

const posts = require('./posts')

app.get('/posts', (req, res) =>
{
    res.json(posts)

});

app.get('/', (req, res) =>
{
    res.send("api running")
});

app.post('/post', (req, res) =>
{
    res.send(req)
});

app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
