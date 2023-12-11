const mainControllers = {
    home: (req, res) => res.render('index', {}),         // "Ruta para la vista de Shop."
    contact: (req, res) => res.send("Ruta para la vista de Contact."),
    about: (req, res) => res.send("Ruta para la vista de About."),
    faqs: (req, res) => res.send("Ruta para la vista de FAQs.")
}

module.exports = mainControllers;
