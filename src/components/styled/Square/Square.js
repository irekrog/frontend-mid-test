import React from 'react';
import './square.scss';

const Square = ({className, children}) => (
        <div className={`square ${className || ''}`}>
            {children}
        </div>
    )

export default Square;