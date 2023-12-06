const express = require('express');

const app = express();

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.urlencoded ({extended: false}));
app.use(express.json());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/negra', (req, res)=>{
    res.render('pruebita', {usuario: "negra"});
});

app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.get('/ping', (req, res) => res.send('pong'));
app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));


