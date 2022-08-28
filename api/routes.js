'use strict'

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');
const router = express.Router();
const { handler } = require('./middleware/async-handler');
const { authenticateUser } = require('./middleware/authenticate');
const { User } = require('./models')

// Route that returns the current authenticated user.
router.get('/users', authenticateUser, handler( async (req, res)=>{
    const user = req.currentUser;
    res.json({ name: user.name, username: user.username })
}));

// Route that creates a new user.
router.post('/users', handler( async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty){
        const errorMessages = errors.array().map(error => error.msg);

        // Return the validation errors to the client.
        return res.status(400).json({ errors: errorMessages });
    }

    const user = req.body;
    user.password = bcryptjs.hashSync(user.password);
    await User.create(user);
    return res.status(201).end();
}));

// Route that deletes the logged in user
router.delete('/users', authenticateUser, handler( async (req, res)=>{
    const user = req.currentUser;
    const del = await User.findOne({ where: { username: user.username } });
    await del.destroy();
    
    console.dir( await User.findAll() );
    res.status(204).end();
}));

module.exports = router;
