const { Router } = require("express");
const router = Router();
const alumCtrl = require("../controller/users.controller");

router.get("/alumnos", alumCtrl.getAllUser);
router.get("/alumnos/:id", alumCtrl.getUser); // UTILIZANDO PARAMS

router.post("/alumnos", alumCtrl.postUser);
router.put("/alumnos", alumCtrl.putUser);
router.delete("/alumnos", alumCtrl.deleteUser);

module.exports = router;