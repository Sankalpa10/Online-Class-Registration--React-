const express = require('express');
const router = express.Router();
const { Students } = require ("../models");

router.get("/", async (req , res) => {

    const listOfPosts =await  Students.findAll();
    res.json(listOfPosts);
}); 

router.post("/", async (req , res) => {

    const students = req.body;
    await Students.create(students);
    res.json(students);

}); 


module.exports = router; 