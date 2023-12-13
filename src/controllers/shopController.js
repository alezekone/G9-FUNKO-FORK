const testData = require('../model/datos');
const productModel = require('../model/productModel');

// console.log(testData);
// console.log(testData.at(1));
// Con datos fake, mandaba como parámentro {data: testData} a la vista.

const shopControllers = {
    shop_get : async (req, res) => {
        const data = await productModel.getAll();
        console.log(data);
        res.render('shop/shop', {data});
        console.log('La imagen dice ' + data.at(1).image_front);
    },
    shop_item_get : async (req, res) => {
        const itemId = req.params.id;
        const [item] = await productModel.getOne(itemId);
        res.render('shop/item',{item});
    },
    shop_item_post : (req, res) => res.send(`Ruta para agregar un item. Parámetro: ${req.params.id}`),
    shop_cart_get : (req, res) => res.render('shop/cart'),
    shop_cart_post : (req, res) => res.send("Ruta para agregar un carrito.")   
}

module.exports = shopControllers;
