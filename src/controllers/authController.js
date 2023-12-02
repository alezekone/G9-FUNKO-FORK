const authControllers = {
    login_post : (req, res) => res.send("Ruta para Login por post."),
    login_get : (req, res) => res.send("Ruta para la vista de Login."),
    register_get : (req, res) => res.send("Ruta para la vista de Register."),
    register_post : (req, res) => res.send("Ruta para Register por post."),
    logout_get : (req, res) => res.send("Ruta para Logout.")
}

module.exports = authControllers;