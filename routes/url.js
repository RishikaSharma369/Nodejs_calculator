const express = require('express')
const {add,sub,multi,div} = require('../controllers/operation')
const route = express.Router()


route.post('/add',(req,res)=>{
    try{
    const values = req.body.values
    res.send({"answer":add(values)})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

route.post('/sub',(req,res)=>{
    const values = req.body.values
    res.send({"answer":sub(values)})
})

route.post('/multi',(req,res)=>{
    const values = req.body.values
    res.send({"answer":multi(values)})
})

route.post('/div',(req,res)=>{
    try{
    const a = req.params.a
    const b = req.params.b
    res.send({"answer":div(a/b)})
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

module.exports=route