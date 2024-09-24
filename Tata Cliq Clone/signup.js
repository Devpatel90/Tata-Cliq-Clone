document.getElementById("formd").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let username = document.getElementById("username").value
    let obj = {
       email : email,
       password : pass,
       username : username
    }
 
    fetch(`http://localhost:3000/users`,{
       method : "POST",
       headers : {
          "Content-Type" : "application/json"
       },
       body : JSON.stringify(obj)
    })
    .then((Res)=>{
     return Res.json()
    })
    .then((res)=>{
     console.log(res)
    })
    .catch((err)=>{
     console.log(err)
    })
 })