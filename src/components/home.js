import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Home extends Component{
    render(){
        return (
            <div style = {{width : '100%', margin : 'auto'}}>
            <Grid className = "home-grid">
                <Cell col = {12}>
                    <img
                    src = "https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                    alt = "avatar"
                    className = "my-image"
                    />
                </Cell>
            </Grid>
            </div>
        )
    }
}
export default Home;