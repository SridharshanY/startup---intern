import express from 'express'
import { User } from '../models/userModel.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try{
        if(!req.body.name || !req.body.email || !req.body.password){
            return res.status(400).send({message: 'Please fill all the fields'})
        }
        const email = req.body.email
        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(400).send({message: 'User already exists, Please Sign In'})
        }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const newUser = await User.create(user)
        return res.status(200).send({message: 'User registered successfully'})
    }
    catch(error){
        return res.status(500).send({message: error.message})
    }
})

export default router