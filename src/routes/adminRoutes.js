const express = require('express');
const adminControllers = require('../controllers/adminController');
// *** Podríamos ver el objeto importado:
// console.log(adminControllers);

// *** Se podría hacer una desestructuración
// const {
//     admin_get,
//     admin_create_get,
//     admin_create_post,
//     admin_edit_get,
//     admin_edit_put,
//     admin_delete
// } = require('../controllers/adminController');
// *** Y luego llamar a las rutas del siguiente modo:
// router.get('/', admin_get);
// *** A mi me gusta más así como lo dejo hecho.

const router = express.Router();

router.get('/', adminControllers.admin_get);
router.get('/create', adminControllers.admin_create_get);
router.post('/create', adminControllers.admin_create_post);
router.get('/edit/:id', adminControllers.admin_edit_get);
router.put('/edit/:id', adminControllers.admin_edit_put);
router.delete('/delete/:id', adminControllers.admin_delete);

module.exports = router;