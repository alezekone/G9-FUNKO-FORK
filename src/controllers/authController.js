const authControllers = {
    login_post : (req, res) => res.send("Ruta para Login x post."),
    login_get : (req, res) => res.render('auth/login',{}),
    register_get : (req, res) => res.render('auth/register',{}),
    register_post : (req, res) => res.send("Ruta para Register x post."),
    logout_get : (req, res) => res.send("Ruta para Logout.")
}

module.exports = authControllers;