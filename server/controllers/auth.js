const { token } = require("morgan");
const User = require("../model/user");
const jwt = require('jsonwebtoken');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const register = async (req, res) => {
  const {name, email, password} = req.body;

  if(!name) return res.status(400).send("Name is Required");
  if(!password || password.length < 6) return res.status(400).send("Password is Required and should be more than 6 character!");
  
  let userExist = await User.findOne({ email }).exec();
  if (userExist) return res.status(400).send("Email is taken");

  const user = new User(req.body);
  try {
    await user.save();
    console.log("User Created!", user);
    return res.json({ ok: true });
  } catch (error) {
    console.log("Create user Failed", error);
    return res.status(400).send("Error, Try Again.")
  }
}

const login = async (req, res) => {
  const {email, password} = req.body;
  try {
    let user = await User.findOne({ email }).exec();
    if(!user) {
      return res.status(400).send("User with that email not found");
    }

    user.comparePassword(password, (error, match) => {
      if(!match || error) {
        return res.status(400).send("Wrong Password");
      }
      // Generate a token then send as response to client
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{
        expiresIn: "3d",
      });
      return res.json({
        token, 
        user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt 
        },
      });
    });
  } 
  catch (error) {
    console.log("Login Error", error)
    return res.status(400).send("Signing Failed")
  }
}

const createConnectAccount = async (req, res) => {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const user = await User.findById(req.user._id).exec();
    if (!user) {
      return res.status(400).send("User not found");
    }

    const account = await stripe.accounts.create({
      type: "express",
      individual: {
        email: user.email,
        first_name: user.name.split(" ")[0],
        last_name: user.name.split(" ")[1],
      },
    });

    user.stripe_seller = account.id;
    await user.save();

    res.json({ ok: true });
  } catch (error) {
    console.log("Create connect account failed", error);
    res.status(400).send("Error, Try Again.");
  }
};

module.exports = {
  register,
  login,
  createConnectAccount,
};