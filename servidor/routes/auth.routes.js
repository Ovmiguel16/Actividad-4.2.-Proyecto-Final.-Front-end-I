const { Router } = require("express");
const { validarCrearCuenta } = require("../middlewares/auth.middlewares");
const { crearCuenta, login } = require("../controllers/auth.controllers");

// rutas para el hacer login y crear cuenta
const router = Router();

router.post("/crearCuenta", [validarCrearCuenta], crearCuenta);
router.post("/login", login);

module.exports = router;