
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
    //console.log(req.body);
    //res.json(req.body);
    //res.append(req.body.post)

    /*const info = {

        id: infos.lenth +1,
        name : req.body.post
    };

    infos.push(info);*/
    res.send(req.body);
    
}
);


app.listen(process.env.PORT || 3000, 
   () => console.log("Server is login")

);
