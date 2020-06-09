import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://raw.githubusercontent.com/sukriti1/Sukriti_Bhardwaj/master/image.jpg"
              alt="my-image"
              className="my-img"
              />
            <div className = "ban">
                <h1>Sukriti Bhardwaj</h1>
                <div className = "social">
                <a href = "https://www.linkedin.com/in/bhardwaj-sukriti/" rel = "noopenner noreferrer" target = "_blank">
                    <i className = "fa fa-linkedin-square" aria-hidden = "true" />
                </a>
                <a href = "https://github.com/sukriti1" rel = "noopenner noreferrer" target = "_blank">
                    <i className = "fa fa-github-square" aria-hidden = "true" />
                </a>
                <a href = "mailto:sukriti1.bhardwaj@gmail.com" rel = "noopenner noreferrer" target = "_blank">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                </a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;