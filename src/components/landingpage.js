import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="../image.jpg"
              alt="avatar"
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
                <a href = "sukriti1.bhardwaj@gmail.com/" rel = "noopenner noreferrer" target = "_blank">
                    <i class="fas fa-envelope-open" aria-hidden = "true" />
                </a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;