import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

function Routes(props) {

    return(
        <Switch>
            <Route exact path={"/"} component={Home}></Route>
        </Switch>

    )
}

const Container = styled.div`

`;

export default Routes;
