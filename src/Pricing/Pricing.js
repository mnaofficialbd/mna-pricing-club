import React from 'react';
import PricingOption from '../Components/PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption=[
        {id:1,name:'Free',price:0,benefits:[
            "lifetime free",
            "unlimited deals",
            "localized deals",
            "crazy deals"
        ]},
        {id:2,name:'Regular',price:9.99,benefits:[
            "everything on free",
            "unlimited deals",
            "localized deals",
            "crazy deals"
        ]},
        {id:3,name:'Premium',price:19.99,benefits:[
            "everything on Regular",
            "unlimited deals",
            "localized deals",
            "crazy deals"
        ]}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h1 className='text-3xl font-mono text-white'>Best Deals of the Town</h1>
            <p>Price is the value that is put to a product or service and is the result of a complex set of calculations, research and understanding and risk taking ability. A pricing strategy takes into account segments, ability to pay, market conditions, competitor actions, trade margins and input costs, amongst others.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option=><PricingOption
                    key={option.id}
                    option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;