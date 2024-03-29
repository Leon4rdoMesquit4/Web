const express = require('express');
const mustache = require('mustache-express'); 
const app = express();

app.engine('html', mustache()); 
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 

const PORT = 8080;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.render('index.html'));

app.post('/dados', (req, res) => {
    const {name, address, telefone, date} = req.body;
    res.render('dados.html', {name, address, telefone, date});
});

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`);
})


