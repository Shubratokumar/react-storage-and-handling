// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart;

    // get the shopping cart from local storage 
    const storedCart = localStorage.getItem('Shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
}

// remove items from DB
const removeFromDb = id => {
    const storedCart = localStorage.getItem('Shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// remove all items from shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('Shopping-cart')
}

export  {
    addToDb,
    removeFromDb,
    deleteShoppingCart
};