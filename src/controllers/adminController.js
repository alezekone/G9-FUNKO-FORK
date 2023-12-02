const adminControllers = {
    admin_get : (req, res) => res.send("Ruta para la vista de Admin."),
    admin_create_get : (req, res) => res.send("Ruta para la vista de Crear en Admin."),
    admin_create_post : (req, res) => res.send("Ruta para ."),
    admin_edit_get : (req, res) => res.send(`Ruta para la vista de edición por id. Parámetro: ${req.params.id}`),
    admin_edit_put : (req, res) => res.send(`Ruta para modificar. Parámetro: ${req.params.id}`),
    admin_delete : (req, res) => res.send(`Ruta para borrar un producto. Parámetro: ${req.params.id}`)
}

module.exports = adminControllers;