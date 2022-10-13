const { Router } = require("express");
const router = Router();
const {
  usuariosGet,
  usuariosPut,
  usuariosDelete,
  usuariosPost,
  usuariosPatch,
} = require("../controllers/usuarios");

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
