        //like a function page kinda
const asyncHandler = require('express-async-handler') //when using mongoose get back promise, need async step 6
        //if async need to use try catch so this deals with it where we only need to use error handler

        //@desc Get goals
        //@route Get /api/goals
        //@access private
const getGoals = asyncHandler(async (req, res) => { //step 6 making things async, need library download with npm i express-async-handler
 res.status(200).json({message : 'Get goals'})
})

        //@desc Set goals
        //@route Set /api/goals
        //@access private
const setGoals = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add new text field')
    }
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

        //@desc Update goals
        //@route Update /api/goals/id
        //@access private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

        //@desc Get goals
        //@route Get /api/goals/id
        //@access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : 'Get goals'})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}
//step 6 create database