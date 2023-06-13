const User = require("../../models/users/user");
const sendEmail = require("../../helpers/sendEmail");
const { EMAIL } = process.env;

const resendEmail = async (req, res, next) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			res.status(404).json({
				message: "User not found",
			});
			return;
		}
		if (user.verify) {
			res.status(400).json({
				message: "Verification has already been passed",
			});
			return;
		}

		const verifyEmail = {
			to: email,
			from: EMAIL,
			subject: "Verify email",
			html: `
      <h1>Verify email</h1>
      <a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Click</a>
      `,
		};

		await sendEmail(verifyEmail);

		res.json({
			message: "Verification email sent",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = resendEmail;
