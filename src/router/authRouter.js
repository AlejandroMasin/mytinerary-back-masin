const express = require("express")

const authRouter = express.Router()

const {signUp, signIn, signInToken, signOut} = require("../controllers/authController")

const {signUpValidator} = require("../middlewares/signUpValidator")

const passport = require("../middlewares/passport")

authRouter.post("/signIn", signIn)

authRouter.post("/signOut", signOut)

authRouter.post("/signUp", signUpValidator, signUp)

authRouter.post("/signIn/token", passport.authenticate( 'jwt', {session: false} ), signInToken )

module.exports = authRouter