const { User } = require("../models");
const nodemailer = require("nodemailer");
require("dotenv").config();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

const updateUserStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.status !== "pending") {
      return res.status(400).json({ message: "User status is not pending" });
    }

    user.status = "approved";
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Your Account Status Has Been Updated",
      text: `Dear ${user.firstName},\n\nYour account status has been updated to "approved".\n\nBest regards,\nYour Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({ message: "User status updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user status", error });
  }
};

module.exports = {
  getAllUsers,
  updateUserStatus,
};
