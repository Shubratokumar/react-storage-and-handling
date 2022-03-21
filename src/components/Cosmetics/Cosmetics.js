import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, divide } from '../../utilities/calculate';
// import add from './../../utilities/calculate';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
   
    const total = getTotal(cosmetics);
    /* const num1 = 45;
    const num2 = 5;
    const total = add(num1, num2)
    const result = divide(num1, num2) */
    return (
        <div>
            <h2>This our cosmeties store.</h2>
            <p>Money needed : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic = {cosmetic} key = {cosmetic.id}></Cosmetic>)
            }
            {/* <p>Total Product available : {total}</p>
            <p>Product in warehouse : {result}</p> */}
        </div>
    );
};

export default Cosmetics;