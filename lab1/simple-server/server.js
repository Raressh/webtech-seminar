import express from 'express';
const app = express();

app.get('/hello', (req, res) => {
    console.log("consola")
    res.send('Hello World!');
});

app.listen(3000, () => { console.log("Server is running on port 3000") });