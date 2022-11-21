import asyncHandler from "express-async-handler"
import User from "../Models/userModel.js"

// @desc Login User
// @POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error("Invalid Email and Password")
  }
})

// @desc Register new User
// @POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExits = await User.findOne({ email })

  if (userExits) {
    res.status(400)
    throw new Error("User already exists")
  }
  const user = await User.create({
    name: name,
    email: email,
    password: password,
  })
  if (user) {
    res.status(201)
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid User data")
  }
})

export { registerUser, loginUser }
