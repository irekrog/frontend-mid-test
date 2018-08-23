import React from 'react';
import Square from '../../components/styled/Square/Square';
import MiniSquare from '../../components/styled/MiniSquare/MiniSquare';
import Button from '../../components/styled/Button/Button';
import './styled-container.scss';

const StyledContainer = () => {
    return (
            <div>
                <div className="container">
                <Square className="-white">
                    <h2 className="title">Kilka słow o nas</h2>
                    <h3 className="subtitle">Czym i kim jesteśmy?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button className="button">Zobacz więcej</Button>
                </Square>
                <Square className="-with-mini">
                    <MiniSquare className="-photo">
                    </MiniSquare>
                    <MiniSquare className="-white">tekst 2</MiniSquare>
                    <MiniSquare className="-white">tekst 3</MiniSquare>
                    <MiniSquare className="-photo">tekst 4</MiniSquare>
                </Square>
                <Square  className="-blue">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Square>
                <Square className="-white">
                    <h2>Nasza oferta</h2>
                    <h3>Czym i kim jesteśmy?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button>Zobacz więcej</Button>
                </Square>
            </div>
            </div>
    )
}

export default StyledContainer;