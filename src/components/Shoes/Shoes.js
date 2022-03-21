import React from 'react';
import { multiply, subtruct } from '../../utilities/calculate';
// import add from './../../utilities/calculate';

const Shoes = () => {
    const num1 = 60;
    const num2 = 50;
    const result = multiply(num1, num2);
    const total = subtruct(num1, num2)
    return (
        <div>
            <h3>This is Shoes Component.</h3>
            <p>Total shoes in store : {result}</p>
            <p>Available this week : {total}</p>
        </div>
    );
};

export default Shoes;