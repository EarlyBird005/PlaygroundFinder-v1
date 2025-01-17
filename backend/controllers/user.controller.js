import { UserModel } from "../models/User.model.js"

export const userRegister = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname?.firstname || !email || !password) {
        return res.status(400).json({
            msg: "All fileds are required",
            success: "fail"
        });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        return res.status(400).json({
            msg: `${email} already registered`,
            success: "fail"
        });
    }

    const hashPassword = await UserModel.hashPassword(password);
    const userCreated = await UserModel.create({
        fullname: {
            firstname: fullname.firstname
        },
        email,
        password: hashPassword
    });

    if (!userCreated) {
        return res.status(500).json({
            msg: "Can not create user right now",
            success: "fail"
        });
    }

    const user = await UserModel.findOne({ email });
    return res.status(200).json({
        msg: "Registered successfully",
        user
    });
}

export const userLogin = async (req, res) => {
    if (req.cookies.token) {
        return res.status(400).json({
            msg: "Already logeed in / cookie stored",
            success: "fail"
        });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            msg: "All fields are required",
            success: "fail"
        });
    }

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
        return res.status(400).json({
            msg: "Invalid email",
            success: "fail"
        });
    }

    const passMatched = await user.comparePassword(password);
    if (!passMatched) {
        return res.status(400).json({
            message: "Password is incorrect",
            success: "fail"
        });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'None',
        domain: 'http:localhost:5000'
    });
    /* 
    header cookie set: 
    Authorization -> bearer COOKIE_VAL 
    */

    return res.status(200).json({
        message: "Login successfully",
        token
    });
}

export const userLogout = (req, res) => {
    // const cookie = req.cookies.token || req.headers.authorization?.split(" ")[1];
    const cookie = req.cookies.token;
    if (!cookie) {
        return res.status(401).json({
            message: "Cookie not found",
            success: "fail"
        });
    }

    res.clearCookie("token");
    return res.status(200).json({
        message: "Logged out successfully",
        success: "true"
    });
}

export const userAccDlt = async (req, res) => {
    const user = await UserModel.deleteOne(req.user._id);

    res.clearCookie("token");
    return res.status(200).json({
        msg: "user acc deleted",
        success: "true"
    });
}

export const getUserDetail = async (req, res) => {
    return res.status(200).json({
        user: req.user
    });
}

export const updateUserData = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(400).json({
                msg: "Failed to update data",
                success: "fail"
            });
        }

        return res.status(200).json({
            msg: "Data updated successfully",
            updatedUser
        });
    } catch (error) {
        // return res.status(400).json({
        //     msg: "An error occurred while updating data",
        //     error: error.message
        // });
        console.log("An error occurred while updating data:", error);
    }
}

export const getAllUserDetail = async (req, res) => {
    const allUser = await UserModel.find({});
    if (!allUser) {
        return res.status(500).json({
            msg: "Failed to get all users details",
            success: "fail"
        });
    }

    return res.status(200).json({ allUser })
}