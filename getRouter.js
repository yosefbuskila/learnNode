const router=require('express').Router()
const posts=require('./posts')

router.get('/',(req,res)=>{
    res.json(posts.getPosts())
})

module.exports=router;
