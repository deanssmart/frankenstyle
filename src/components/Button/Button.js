import React from 'react';

const Button = ({
    label,
    buttonClass,
    handleClick,
}) => (
        <button 
            className={ buttonClass }
            onClick={ handleClick }                      
        >
            { label }
        </button>
);

export default Button;