import brcyptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await brcyptjs.genSalt(10);
    const hashedPassword = await brcyptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "No user found. Try signing up!" });
    }

    const match = await brcyptjs.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
