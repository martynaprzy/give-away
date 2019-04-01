import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about-box'>
                <div className='left-box'>
                    <h2>O nas</h2>
                    <img src="https://trello-attachments.s3.amazonaws.com/5c51a5e7dda6f54c2c44d7c6/5c51a5e7dda6f54c2c44d800/x/b1e349d572179de8aea6d1429e73e6e0/decoration.png" alt='background' className="decor"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque dolore doloremque exercitationem facere facilis fuga harum ipsum laborum maxime nemo non odio perspiciatis quod repudiandae sequi, sunt suscipit vero.</p>
                </div>
                    <img src='https://trello-attachments.s3.amazonaws.com/5c51a5e7dda6f54c2c44d7c6/5c51a5e7dda6f54c2c44d800/x/7077416719e3497f99befb370dd64395/about.jpg' className='about-pic'/>
            </div>
        )
    }
}
export default About;