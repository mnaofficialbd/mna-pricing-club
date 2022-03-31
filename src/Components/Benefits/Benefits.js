import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';


const Benefits = (props) => {
    return (
        <p className='flex items-center'>
                    <CheckIcon className='w-4 h-4 text-green-600 mr-2'></CheckIcon>
                    {props.benefit}
                </p>
    );
};

export default Benefits;