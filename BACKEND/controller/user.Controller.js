const User = require('../model/user.Model');
const bcrypt = require('bcrypt');

module.exports.signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User Already Exist!!" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })

        await createUser.save();
        res.status(201).json({ message: "User Created Successfully!!" , user:{
            _id : createUser._id,
            fullname : createUser.fullname,
            email : createUser.email
        }})
    } catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        else {
            res.status(200).json({
                message: "User Login Successfully!!", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })

        }
    } catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}