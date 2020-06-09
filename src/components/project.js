import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';
class Project extends Component{
    render(){
        return (
            <div className = "biggie">   
            <div className = "big-div">
            <div className = "projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://raw.githubusercontent.com/sukriti1/Sukriti_Bhardwaj/master/photon.png) center / cover'}} ></CardTitle>
            <CardText>
                <h3>Railway Management System</h3>
              This a real-time animated railway management program to find the optimal railway routes and keep track of 50+ incoming and outgoing passengers. The seating of the train is visible. Additional features include a meal plan and live weather detection .
            </CardText>
            <CardActions border>
            <a href = "https://github.com/sukriti1/Railway-Management-System" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://olliconnects.org/wp-content/uploads/2018/11/wordcloud-butterfly.jpg) center / cover'}} ></CardTitle>
            <CardText>
                <h3>Reverse Sentiment Analysis</h3>
                This is based of a kaggle challenge, where we are given the sentiment of the sentence and we find the part of the sentence that gives this sentiment. This was done using the BERT model and making some changes in the algorithm.This was my first NLP project and it was super fun!
            </CardText>
            <CardActions border>
            <a href = "https://github.com/vtrivedi7/SentimentSource" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
            </Card>
            <br />
            <br />
            </div>
            <div className = "haha">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://user-images.githubusercontent.com/34989177/35237313-9df2b2ec-ffaa-11e7-84d6-739c6129d9cb.png) center / cover'}} ></CardTitle>
            <CardText>
                <h3>Paint World</h3>
                This is a replication of our favorite paint made using Java Fx. It has most of the paint features like coloring, painting, erasing and adding text.
            </CardText>
            <CardActions border>
            <a href = "https://github.com/sukriti1/Paint" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>


            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://raw.githubusercontent.com/sukriti1/Sukriti_Bhardwaj/master/Screen%20Shot%202020-06-08%20at%207.14.52%20PM.png) center / cover'}} ></CardTitle>
            <CardText>
                <h3>Yelpify</h3>
                This was my first react application that makes use of Html,CSS and javascript and it makes use of the yelp api. Its features include searching for restaurants as a user and sorting the results.
            </CardText>
            <CardActions border>
            <a href = "https://github.com/sukriti1/FoodStore" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
            </Card>
            </div>
            </div>
        </div>
        )
    }
}
export default Project;