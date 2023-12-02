const shopControllers = {
    shop_get : (req, res) => res.send("Ruta para la vista de Shop."),
    shop_item_get : (req, res) => res.send(`Ruta para la vista de un item. Parámetro: ${req.params.id}`),
    shop_item_post : (req, res) => res.send(`Ruta para agregar un item. Parámetro: ${req.params.id}`),
    shop_cart_get : (req, res) => res.send("Ruta para la vista del carrito de compras."),
    shop_cart_post : (req, res) => res.send("Ruta para agregar un carrito.")
}

module.exports = shopControllers;

