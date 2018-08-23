import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StyledContainer from './containers/StyledContainer/StyledContainer';
import { Logic } from './containers/LogicContainer/LogicContainer';


export const Routes = () => (
    <div>
        <div style={{background: 'green'}}>
            <div><Link to="/">Styled</Link></div>
            <div><Link to="/logic">Logic</Link></div>
        </div>
        
        <Switch>
            <Route exact path="/" component={StyledContainer} />
            <Route path="/logic" component={Logic} />
        </Switch>
    </div>
);
