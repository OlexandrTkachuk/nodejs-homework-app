const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { isValidId, tokenCheck } = require("../../middlewares");

router.get("/:contactId", tokenCheck, isValidId, ctrl.getById);

router.post("/", tokenCheck, ctrl.createNew);

router.delete("/:contactId", tokenCheck, isValidId, ctrl.deleteById);

router.put("/:contactId", tokenCheck, isValidId, ctrl.editById);

router.patch(
	"/:contactId/favorite",
	tokenCheck,
	isValidId,
	ctrl.updateStatusContact
);

module.exports = router;
