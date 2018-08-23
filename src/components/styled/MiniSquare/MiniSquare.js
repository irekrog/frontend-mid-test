import React from 'react';
import './mini-square.scss';

const MiniSquare = ({className, children}) => ( 
    <div className={`mini-square ${className || ''}`}>
        {children}
    </div>
);

export default MiniSquare;