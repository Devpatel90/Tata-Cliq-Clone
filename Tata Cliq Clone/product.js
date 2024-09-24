fetch("http://localhost:3000/products") // promise
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector(".maindata").innerHTML=view(res)
})
.catch((err)=>{
    console.log(err);
    
})

function view(arr){
    return arr.map((el,i)=>{
         return  `
         <div class="card">
            <img src="${el.img}" class="card-img-top">
            <div class="card-body text-center">
                <h6 class="card-title">${el.name}</h6>
                <p class="card-text">${el.description}</p>
                <p class="price">₹${el.price} <span class="price-strike">₹${el.cutPrice}</span></p>
                <span class="badge bg-success">${el.rating}</span>
                <div class="mt-2">
                    <i class="heart-icon bi bi-heart"></i>
                    <i class="cart-icon bi bi-cart" onclick="add(${el.id})"></i>
                </div>
            </div>
        </div>`
     }).join("")
 }


 function add(id){
    fetch(`http://localhost:3000/products/${id}`) 
 .then((res)=>{
    return res.json()
 })
 .then((res)=>{
     
     posting(res)
 })
 .catch((err)=>{
    console.log(err)
 })
 }


 function posting(obj){
    fetch("http://localhost:3000/cart",{
     method : "POST",
     headers : {
         "Content-Type" : "application/json"
     },
     body : JSON.stringify(obj)
    })
    .then((Res)=>Res.json())
    .then((Res)=>{
     console.log(Res)
    })
    .catch((err)=>{
     console.log(err)
    })
  }