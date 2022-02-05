import React from 'react';

const Title = ({title}) => {
    return (
        <div className='app-title'>
            <h1 className="title-text">
                {title}
            </h1>
        </div>
    )
}

export default Title;