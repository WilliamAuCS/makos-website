// All database requests managed here

const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')

// File containing connection link to database
const db = require('./db_credentials')


mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if(err)
    {
        console.error('Error!' + error)
    }
    else
    {
        console.log('Connected to mongodb')
    }
        
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {

    // Extracting user data from request object
    let userData = req.body
    // Converting into mongoose model
    let user = new User(userData)
    // Saving to database
    user.save((error, registeredUser) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            res.status(200).send(registeredUser)
        }
    })
})

// Post request to the endpoint 'login'
router.post('/login', (req, res) => {

    // Extracting user data
    let userData = req.body

    // Check if given email/pass combo exists
    User.findOne({email: userData.email}, (error, user) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            // Throw error if email does not exist
            if(!user)
            {
                res.status(401).send('Invalid email')
            }
            else
            {
                // Throw error if password does not match
                if(user.password !== userData.password)
                {
                    res.status(401).send('Invalid password')
                }
                // If email/pass match, return user data
                else
                {
                    res.status(200).send(user)
                }
            }
        }
    })
})

module.exports = router