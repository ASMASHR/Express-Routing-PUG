// required external module
const express=require('express')
const path=require('path')
// app variables

const app =express()
const port=process.env.port||"8000"
// middleware function
function verify_time(req,res,next){
    var today = new Date();
    var day= today.getDay()
    var hour=today.getHours()
    if ((day===6)||(day===7)||(hour>16)||(hour<9)){
        res.render("close",{title:"we are close"})
    }
    else console.log("welcome")

    next()
}
// app config
app.set("views",path.join(__dirname,"views"))
app.set("view engine","pug")
app.use(express.static(path.join(__dirname,"public")))
app.use(verify_time)
// routes def
app.get("/",(req,res)=>{
    res.render("home",{title:"Home"})
})
app.get("/contact",(req,res)=>{
    res.render("contact",{title:"contact"})
})
app.get("/Blog",(req,res)=>{
    res.render("Blog",{title:"Our Blog"})
})
app.get("/Courses",(req,res)=>{
    res.render("Courses",{title:"Courses"})
})
app.get("/signUp",(req,res)=>{
    res.render("signUp",{title:"Create Account"})
})
app.get("/signIn",(req,res)=>{
    res.render("signIn",{title:"User account"})
})
// server activation
app.listen(port,()=>{
    console.log(`listening to requests on http://localhost:${port}`)
})