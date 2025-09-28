function addToCart(button){
    if (button.innerText === "Add to Cart"){
        button.innerText = "Remove from Cart";
        button.style.backgroundColor = "red";
    } else {
        button.innerText = "Add to Cart";
        button.style.backgroundColor = "";
    }
}