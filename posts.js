class Posts{
    
    constructor(){
this.posts=[
      {
        name:'moshe',
        text:'hi ma nishma',
        like:5
    },
      {
        name:'dani',
        text:'yesh chagiga',
        like:4
    },
      {
        name:'moshe',
        text:'heloooow',
        like:8
    }
    ]
}
getPosts(){
    return this.posts
}
  
  add(post){
    this.posts.push(post)
  }
}
module.exports=new Posts;