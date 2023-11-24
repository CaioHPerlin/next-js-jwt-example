// Crypto
const crypto = require('./crypto');

// JWT
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");

const cors = require('cors');

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",

  allowedHeaders:"Content-Type, Authorization",
  credentials: true
}

var cookieParser = require('cookie-parser')

const express = require('express');
const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: req => req.cookies.token
  }).unless({ path: ["/autenticar", "/logar", "/deslogar", "/usuarios/cadastrar"] })
);

app.get('/usuarios/listar', async function(req, res) {
  const usuarios = await usuario.findAll();
  res.json(usuarios)
  //res.render('listar', {registro: usuarios})
})

app.get('/usuarios/cadastrar', function(req, res){
  res.render('cadastrar');
})

app.post('/usuarios/cadastrar', async function(req,res){
  let {senha, csenha} = req.body;
  if(csenha == senha){
    let senhaCriptografada = crypto.encrypt(senha);
    await usuario.create({
      usuario: req.body.usuario,
      senha: senhaCriptografada
    });

    res.redirect('/usuarios/listar');
  } else(res.status(500).json({mensagem: 'As senhas inseridas não são iguais.'}))
})

app.get('/autenticar', async function(req, res){
  res.render('autenticar');
})

app.get('/', function(req, res){
  res.render('home');
})

app.post('/logar', async function(req, res) {
  const registro = await usuario.findOne({ where: { usuario: req.body.name, senha: crypto.encrypt(req.body.password) } })
  if(registro){
    const id = registro.id;
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 300 });
    return res.cookie('token', token, { httpOnly: true }).json({
      name: registro.usuario,
      token: token
    })
  }
  return res.status(500).json({ message: 'Credenciais inválidas '});
})

app.post('/deslogar', function(req, res) {
  res.cookie('token', null, { httpOnly: true })
  res.redirect('/autenticar')
})

app.listen(3001, function() {
  console.log('App de Exemplo escutando na porta 3001!')
}); ''