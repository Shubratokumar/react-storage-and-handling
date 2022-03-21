const add = (first, second) =>{
    return first + second;
}

// export default add;

const multiply = (first,second) => first * second;
const subtruct = (first, second) => first - second;
const divide = (first, second) => first / second;
const modulus = (num) => num % 2 ;

const numbers = [ 20, 45, 87, 98, 75];
// const sumReducer = (previous, current) => previous + current;

// const total = numbers.reduce(sumReducer, 0)
const total = numbers.reduce((previous, current) => previous + current, 0);

/* const items = [
    {id: 1, name : "alta", price : 100},
    {id: 2, name : "alta", price : 200},
    {id: 3, name : "alta", price : 300},
    {id: 4, name : "alta", price : 400},
    {id: 5, name : "alta", price : 500}
]
const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0); */

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}

export {
    add, 
    multiply, 
    subtruct, 
    divide, 
    modulus,
    getTotalPrice as getTotal
};