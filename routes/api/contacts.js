const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { isValidId, authTokenCheck } = require("../../middlewares");

router.get("/", authTokenCheck, ctrl.getAll);

router.get("/:contactId", authTokenCheck, isValidId, ctrl.getById);

router.post("/", authTokenCheck, ctrl.createNew);

router.delete("/:contactId", authTokenCheck, isValidId, ctrl.deleteById);

router.put("/:contactId", authTokenCheck, isValidId, ctrl.editById);

router.patch(
	"/:contactId/favorite",
	authTokenCheck,
	isValidId,
	ctrl.updateStatusContact
);

module.exports = router;
