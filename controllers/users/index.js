const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./current");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
	register,
	login,
	getCurrentUser,
	logout,
	updateSubscription,
	updateAvatar,
};
