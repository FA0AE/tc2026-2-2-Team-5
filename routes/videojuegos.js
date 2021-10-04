const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()

// Videojuegos
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)

// Consolas
router.post('/agregarConsola',vjController.postAgregarConsola)
router.get('/obtenerConsola',vjController.getObtenerConsola)
router.post('/borrarConsola',vjController.postBorrarConsola)
router.post('/actualizarConsola',vjController.postActualizarConsola)

// Combo
router.post('/agregarCCVJ',vjController.postAgregarComboConsolaVideojuego)
router.get('/obtenerCCVJ',vjController.getObtenerComboConsolaVideojuego)
router.post('/borrarCCVJ',vjController.postBorrarComboConsolaVideojuego)
router.post('/actualizarCCVJ',vjController.postActualizarComboConsolaVideojuego)

module.exports = router