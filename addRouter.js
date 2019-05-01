const router=require('express').Router()
const posts=require('./posts')

router.post('/',(req,res)=>{
    console.log('req',req.body)
    posts.add(req.body)
    res.json({})
})

module.exports=router;
