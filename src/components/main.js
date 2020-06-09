import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './landingpage';
import skills from './skills';
import aboutme from './aboutme';
import experience from './experience';
import project from './project';
const Main = () => (
    <Switch>
        <Route exact path = "/" component = {home} />
        <Route path = "/skills" component = {skills} />
        <Route path = "/aboutme" component = {aboutme}/>
        <Route path = "/experience" component = {experience}/>
        <Route path = "/project" component = {project} />
    </Switch>
)
export default Main;