const express = require("express");
const router = new express.Router();
const Students = require("../models/students");

// save student record in database
router.post('/students', async(req, res) => {
    try{
        const student = new Students(req.body);
        const result = await student.save();
        res.status(201).send(result)
    }catch(error){
        res.status(400).send(error);
    }
});

// get all student record
router.get('/students', async(req, res) => {
    try{
        const result = await Students.find();
        res.status(201).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

// get specific student data
router.get('/students/:id', async(req, res) => {
    try{
        const result = await Students.find({_id: req.params.id});
        res.status(201).send(result);
    }catch(error){
        res.status(500).send(error);
    }
});

// update specific student details
router.patch('/students/:id', async(req, res) => {
    try{
        const result = await Students.findOneAndUpdate(
            {_id: req.params.id},
            {...req.body, updatedAt: Date.now()},
            {new: true}
        );
        res.status(200).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

// delete specific student record
router.delete('/students/:id', async(req, res) => {
    try{
        const result = await Students.findOneAndDelete({_id: req.params.id});
        res.status(200).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;