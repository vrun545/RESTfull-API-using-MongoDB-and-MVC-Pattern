const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    if (!allDbUsers) return res.status(404).json({
        msg: "No User Exist"
    })
    return res.status(200).json(allDbUsers);
}

async function getUserById(req, res) {
    const user = await User.findById( req.params.id ).catch((error) => { error });
    if (!user) return res.status(404).json({ error: "User doesn't Exist."});
    return res.status(200).json(user);
}

async function addNewUser( req, res) {
    const body = req.body;
    // Validating the input properties
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json({ msg: "All fields are required."})
    }
 
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    }).catch((error) => { res.json({ error: "Email is Already Used" }) });

    return res.status(201).json({ msg: "Success"});
}

async function updateUser(req, res) {
    await User.findByIdAndUpdate( req.params.id, { lastName: "Changed" });
    return res.status(200).json({msg: "Updated Successfully"});
}

async function deleteUserById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({error: "User dosn't exist."})
    res.status(200).json({msg: "Success"});
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    deleteUserById,
    addNewUser,
    updateUser
};