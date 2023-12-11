const testData = require('../model/datos');

console.log(testData);

const shopControllers = {
    shop_get : (req, res) => res.render('shop/shop',{}),    // "Ruta para la vista de Shop."
    shop_item_get : (req, res) => res.render('shop/item',{}),
    shop_item_post : (req, res) => res.send(`Ruta para agregar un item. Parámetro: ${req.params.id}`),
    shop_cart_get : (req, res) => res.render('shop/cart'),
    shop_cart_post : (req, res) => res.send("Ruta para agregar un carrito.")
}

module.exports = shopControllers;
