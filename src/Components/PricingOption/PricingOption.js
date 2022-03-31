import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {
    const { name, price,benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h3 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h3>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>
            <div>
                <h4 className='text-xl font-bold text-left'>Benefits:</h4>
               {
                   benefits.map(benefit=><Benefits 
                    benefit={benefit}
                   ></Benefits>)
               }
            </div>
            <button className='bg-pink-500 rounded py-2 mt-6 flex text-white justify-center w-full hover:text-yellow-500 font-bold'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-1'></ArrowRightIcon>
                </button>
        </div>
    );
};

export default PricingOption;