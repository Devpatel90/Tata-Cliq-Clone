document.getElementById("formd").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
     
    fetch(`http://localhost:3000/users?email=${email}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        if(res.length == 0){
            alert("Email Invalid")
        }else{
            if(res[0].password == pass){
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful",
                    icon: "success"
                  });
                    window.location.href = "index.html"
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password Incorrect"
                  });
            }
        }
    })
    .catch((err)=>{
        console.log(err)
    })
 
    
 })

 