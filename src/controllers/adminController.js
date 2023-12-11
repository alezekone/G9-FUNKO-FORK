const adminControllers = {
    admin_get : (req, res) => res.render('admin/admin',{}),
    admin_create_get : (req, res) => res.render('admin/create',{}),
    admin_create_post : (req, res) => res.send("Ruta para Create x post"),
    admin_edit_get : (req, res) => res.render('admin/edit',{}),
    admin_edit_put : (req, res) => res.send("Ruta para Edit x put"),
    admin_delete : (req, res) => res.send(`Se *borró* el item con id ${req.params.id}`)
}

module.exports = adminControllers;