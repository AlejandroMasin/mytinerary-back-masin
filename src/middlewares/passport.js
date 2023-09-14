const passport = require('passport');
const User = require('../models/User');

const Strategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

require('dotenv').config();
const KEY_SECRET = process.env.KEY_SECRET


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: KEY_SECRET
}

const fn = async (jwt_payload, done) => {
    try {
        const user = await User.findOne({email: jwt_payload.email})

        if (!user) {
            done(null, false)
        }
        done(null, user)

    } catch (error) {
        done(err, false)
    }
}

passport.use( new Strategy(options, fn ) )

module.exports = passport