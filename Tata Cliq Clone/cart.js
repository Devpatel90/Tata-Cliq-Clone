fetch(`http://localhost:3000/cart`)
.then((REs)=>REs.json())
.then((res)=>{
    Total(res)
    document.getElementById("data1").innerHTML = view(res)
})
.catch((err)=>{
    console.log(err)
})


function Total(res){
    let sum = 0;
    res.forEach(element => {
        sum+=element.price  
    });
    // return sum;
    document.getElementById("to").innerText = sum;
}


function view(arr){
  
    return arr.map((el)=>{
        return `
        <div class="col-md-4">
                            <img src="${el.img}" class="card-img product-img border border-2">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${el.description}</h5>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="card-text">
                                        <span class="text-muted"><del>₹${el.cutPrice}</del></span> 
                                        <span class="text-danger">₹${el.price}</span> 
                                    </p>
                                </div>
                                <div class="form-row mt-3">
                                    <div class="col">
                                        <label for="size">Size:</label>
                                        <select class="form-control form-control-sm w-50" id="size">
                                            <option>OneSize</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="quantity">Qty:</label>
                                        <select class="form-control form-control-sm w-50" id="quantity">
                                            <option>1</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex" id="more">
                                    <button class="btn btn-outline-secondary mr-2 btn-sm"><i class="fas fa-heart"></i> Move to Wishlist</button>
                                    <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash-alt"></i>Remove</button>
                                </div>
                            </div>
                        </div>`
    }).join("")

}