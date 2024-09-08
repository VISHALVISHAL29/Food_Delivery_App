const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/createuser',
    body('email').isEmail(),
    body('name').notEmpty(),
    body('location').isLength({min:1}),
    body('password').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash( req.body.password,salt)
        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                password:secPassword,
                email: req.body.email
            })
            res.json({ success: true });

        } catch (error) {
            console.log(error);
            res.json({ success: false });

        }
    })
  
   
module.exports = router;