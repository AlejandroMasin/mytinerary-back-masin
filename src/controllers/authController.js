const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();

const KEY_SECRET = process.env.KEY_SECRET

const signUp = async (req, res) => {

    try {
        const { name, lastname, image, country, email, password, is_online } = req.body

        const userInDB = await User.findOne({ email })

        if (userInDB) {
            return res.json({ success: false, error: "El email ya está registrado" })
        }

        const passwordHash = bcrypt.hashSync(password, 10)

        const newObj = { ...req.body }

        newObj.password = passwordHash

        const newUser = await User.create(newObj)

        const userResponse = { email: newUser.email, password: newUser.password, image: newUser.image, name: newUser.name, lastname: newUser.lastname, _id: newUser._id, is_online: newUser.is_online }

        const token = jwt.sign({ email: newUser.email }, KEY_SECRET, { expiresIn: '1h' })

        return res.status(201).json({ success: true, user: userResponse, token: token })

    } catch (error) {
        res.json({ success: false, error: error })
    }

}

//agregar JOI

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body

        console.log(req.body);

        const userInDB = await User.findOne({ email })

        if (!userInDB) {
            return res.json({ success: false, error: "Email o contraseña incorrecta" })
        }

        const validPassword = bcrypt.compareSync(password, userInDB.password)

        if (!validPassword) {
            return res.json({ success: false, error: "Email o contraseña incorrecta" })
        }

        await User.updateOne({ email: userInDB.email }, { $set: { is_online: true } });

        const userResponse = { email: userInDB.email, password: userInDB.password, image: userInDB.image, name: userInDB.name, lastname: userInDB.lastname, _id: userInDB._id, is_online: true }

        const token = jwt.sign({ email: userInDB.email }, KEY_SECRET)
        return res.status(201).json({ success: true, user: userResponse, token: token })

    } catch (error) {
        res.json({ success: false, error: error })
    }

}

const signInToken = async (req, res) => {
    try {
        // Aquí debes tener la información del usuario en `req.user` desde la autenticación

        // Cambia el valor de is_online en la base de datos
        await User.updateOne({ _id: req.user._id }, { $set: { is_online: true } });

        // Crea el objeto userResponse con is_online como true
        const userResponse = {
            email: req.user.email,
            password: req.user.password,
            image: req.user.image,
            name: req.user.name,
            lastname: req.user.lastname,
            _id: req.user._id,
            is_online: true // Cambiar el valor a true
        }

        res.status(200).json({ success: true, user: userResponse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const signOut = async (req, res) => {
    try {
        const { email } = req.body;

        console.log(req.body);
        const userInDB = await User.findOne({ email });


       // if (!userInDB) {
        //    return res.json({ success: false, error: "Email o contraseña incorrecta" });
       // }

        // const validPassword = bcrypt.compareSync(password, userInDB.password);

        // if (!validPassword) {
        //     return res.json({ success: false, error: "Email o contraseña incorrecta" });
        // }

        // Cambiar el valor de is_online a false al realizar el "signOut"
        await User.updateOne({ email: userInDB.email }, { $set: { is_online: false } });

        const userResponse = {
            email: userInDB.email,
            password: userInDB.password,
            image: userInDB.image,
            name: userInDB.name,
            lastname: userInDB.lastname,
            _id: userInDB._id,
            is_online: false, // Cambiar el valor a false para el signOut
        };

        const token = jwt.sign({ email: userInDB.email }, KEY_SECRET);
        return res.status(201).json({ success: true, user: userResponse, token: token });
    } catch (error) {
        res.json({ success: false, error: error });
    }
};


module.exports = {
    signUp,
    signIn,
    signInToken,
    signOut
}