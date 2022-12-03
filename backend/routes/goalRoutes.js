const express = require('express') //js module syntax
const router = express.Router() //give api routing files



const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controller/goalController') //step 3
        //Step 2 Routers for your server 


router.route('/').get(getGoals).post(setGoals)//line are looking for the same thing so can combine the 2 below 3
        // router.post('/' , getGoals) 2
        // router.post('/' , setGoals)


router.route('/:id').delete(deleteGoals).put(updateGoals)//line are looking for the same thing so can combine the 2 below
        // router.delete('/:id' , updateGoals)
        // router.delete('/:id' , deleteGoals)

        //Step 3 Controller
module.exports = router


        // router.get('/' , (req,res) =>{//looks/gets into the port 5000 set up on postman and request a connecction and if done responds with what is below
        //     res.status(200).json({message: 'Get goals'})//res response
        //     //res.send('Get goals') works too
        // }) step 2 example 1

        // router.put('/:id' , (req,res) =>{ //http://localhost:5000/api/goals/11111 when input to postman
        //     res.status(200).json({message: `Update goals ${req.params.id}`}) //request the id of the link which is 11111
        // }) //"Update goals 11111" gets this