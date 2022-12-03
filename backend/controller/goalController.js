const Goal = require('../model/goalModel')        //step 8 goalModel.js, can use mongel info basically
        
        //like a function page kinda
const asyncHandler = require('express-async-handler') //when using mongoose get back promise, need async step 6
        //if async need to use try catch so this deals with it where we only need to use error handler

        //@desc Get goals
        //@route Get /api/goals
        //@access private
const getGoals = asyncHandler(async (req, res) => { //step 6 making things async, need library download with npm i express-async-handler
    const goals = await Goal.find() // step 8 get info from mongoDB use post man to see, send GET// await since async
    res.status(200).json({goals})
})

        //@desc Set goals
        //@route Set /api/goals
        //@access private
const setGoals = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add new text field') //errorMiddle.js
    }

    const goal = await Goal.create({//step 8 setting up connection with mongo to take in from it and output from it
        text: req.body.text
    })
    res.status(200).json({goal})
})

        //@desc Update goals
        //@route Update /api/goals/id
        //@access private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id) //find id
    if(!goal){
        res.status(400) //error
        throw new Error('Goal not found')
    }

    const updateGoals = await Goal.findByIdAndUpdate(req.params.id, //mongodb function.... parm(id, updated text, options new)
    req.body, // new text
    {
        new:true //create if doesnt exist// idk what this does
    })
    res.status(200).json({updateGoals})
})

        //@desc Get goals
        //@route Get /api/goals/id
        //@access private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    //my idea
    const deleteGoals = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({deleteGoals})
    //answer
    //await goal.remove()
    //res.status(200).json({id: req.params.id})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}
//step 6 create database