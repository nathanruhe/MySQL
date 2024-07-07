const { Router } = require("express");
const router = Router();
const alumCtrl = require("../controller/users.controller");

router.get("/media/:id", alumCtrl.media); // USANDO PARAMS
router.get("/apuntadas", alumCtrl.apuntadas); // USANDO QUERY
router.get("/impartidas", alumCtrl.impartidas); // USANDO QUERY

module.exports = router;