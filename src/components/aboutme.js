import React, { Component } from 'react';
class Aboutme extends Component{
    render(){
        return (

            <div class="row">
                <h1>About Me</h1>
                <div class="column" >
                    <img class = "resize"src = "https://raw.githubusercontent.com/sukriti1/Sukriti_Bhardwaj/master/suki.jpg"/> 
                </div>
                <div class="columni">
                    <p>Hey, I am Sukriti and I am an undergraduate rising junior at Georgia Tech. My concentrations in computer science are on media which deals with graphics and computer animation and artificial intelligence. </p>
                    <p>I decided to major in Computer Science after I took it out of interest in high school. I found it challenging but I enjoyed the logical thinking behind it. I also built some applications in high school which helped me realize how vast this field is. However, what particulalry interested me in this field is how it could be used to make a big change - our lives nowadays revolve around computers.</p>
                    <p>I also noticed how computer science is a male dominated field and so I decided to join some female computing groups like Girls Who Code and Rewriting the Code, where I am mentoring high school females transitioning into college.</p>
                    <p>Outside of school work, I am a part of a living learning community called Global Leadership which helps educate others about the UN sustainable goals and works towards them. I also enjoy drawing, reading and cooking.</p>
                </div>
            </div>
        )
    }
}
export default Aboutme;