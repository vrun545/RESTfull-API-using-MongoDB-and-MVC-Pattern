const express = require("express");

const {
    handleGetAllUsers, 
    getUserById, 
    addNewUser, 
    deleteUserById, 
    updateUser
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleGetAllUsers);
router.get("/:id", getUserById);
router.post('/', addNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);


module.exports = router;