const express = require("express");

const { authTokenCheck, upload } = require("../../middlewares");

const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.get("/current", authTokenCheck, ctrl.getCurrentUser);
router.post("/logout", authTokenCheck, ctrl.logout);
router.patch(
	"/avatars",
	authTokenCheck,
	upload.single("avatar"),
	ctrl.updateAvatar
);

router.patch("/", authTokenCheck, ctrl.updateSubscription);

module.exports = router;
