const express = require('express');
const app = express();
const mongoose = require ("mongoose");
const User = "./models/User";

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/users', (req, res) => {
    res.send (users);
});

app.post('/api/users', (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.put('/api/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The user with the given ID was not found');res.send(users);
   
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id))
    if (!course) return  res.status(404).send('The user with the given ID was not found');res.send(users)
});

app.delete('/api/users/:id', (req, res) => {
     const user = users.find(c => c.id === parseInt(req.params.id))
    if (!user) return res.status(404).send('The user with the given ID was not found');res.send(users)
    
    const index = users.indexOf(user);
    user.splice(index, 1);

    res.send(users);
});