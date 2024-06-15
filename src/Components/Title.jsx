import React from 'react';

function Title({title,subTitle}) {
    return (
        <div>
            <h1 className='text-center text-sm mt-[65px] mb-1.5 font-semibold text-blue-800'>{title}</h1>
            <h2 className='text-3xl font-bold text-center'>{subTitle}</h2>
        </div>
    );
}

export default Title;