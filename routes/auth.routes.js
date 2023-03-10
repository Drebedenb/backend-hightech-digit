const {Router} = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const {check, validationResult} = require("express-validator")
const User = require("../models/User")
const router = Router();

router.post(
    "/register",
    [
        check("name", "Min length of name 2 symbols").isLength({min: 2}),
        check("surname", "Min length of surname 2 symbols").isLength({min: 2}),
        check("nameOfOrganization", "Min length of organization 2 symbols").isLength({min: 2}),
        check("email", "Incorrect email").isEmail(),
        check("password", "Min length of password 6 symbols").isLength({min: 6}),
    ],
    async (req, res) => {
        try {
            console.log(req.body)
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: errors.errors[0].msg
                })
            }

            const {name, surname, nameOfOrganization, email, password} = req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: "Email already registered"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({name, surname, nameOfOrganization, email, password: hashedPassword})

            console.log(user)
            await user.save();
            res.status(201).json({message: "User created"})
        } catch (e) {
            res.status(500).json({message: "Something is wrong..."})
        }
    })

router.post("/login", [
        check("email", "Incorrect email").normalizeEmail().isEmail(),
        check("password", "Min length 6 symbols").isLength({min: 6}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect input in login"
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: "User is not found"})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch){
                return res.status(400).json({message: "Incorrect password"});
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get("jwtSecret")
                // { expiresIn: "1h" }
            )

            const {name, surname, nameOfOrganization} = user;
            res.json({token, userId: user.id, name, surname, nameOfOrganization})

        } catch (e) {
            res.status(500).json({message: "Something is wrong..."})
        }
    })


module.exports = router;