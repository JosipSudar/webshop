export default function handler(req, res) {
const data =[
    {
        password:"password",
        username:"user"
    }
]

const checkAuth=()=>{
    const user= req.body.username
    const pass= req.body.password
    const check_user= data.some(a=> a.username=== user)
    const check_pass= data.some(a=>a.password===pass)
    if(check_user && user&& pass ){
if(check_pass &&user&& pass ){
    res.send("auth")
}
else if(!check_pass){
    res.send("error")
}
    }
    else{
        if(!check_user)
        res.send({message:"username dont exist!"})
        else if(!user || !pass){
            res.send({message:"inster all data"})
        }
    }
}
checkAuth()
  }
  