import React from "react";
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'
import Projects from './Projects'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/website' component={Homepage}/>
            <Route exact path='/website/projects' component={Projects}/>
        </Switch>
    )
};

export default Main;