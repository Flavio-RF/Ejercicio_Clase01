const express = require('express');
const router = express.Router();
const controller = require("./controllers/controller")


router.get('/', controller.showHome)
router.get('/fecha', controller.showFecha)
router.get("/multiplicar", controller.showMultiplicar)
router.post("/multiplicar", controller.multiplicar)

module.exports = router;