import React, { Component } from 'react';
import Navigation from "./Navigation"
import Login from "./login";
import YellowBanner from "./YellowBanner";
import Steps from './Steps'
import About from './About'
import Organizations from "./Organizations";
import Contact from './Contact'


class Landing extends Component {

    state = {
        name: 'Martyna',
        age: 27,
        city: 'Warsaw'
    };
    handleClick = (e) => {
        console.log(e.target);
        console.log(this.state);
        console.log(this.state.age);
        console.log(this.state.name);
        console.log(this.state.city);
        this.setState({name: 'Jupi'});
        this.setState({name: 'Yay', age: 20, city: 'Cracow', favcolor: 'blue', email: 'martini@wp.pl', birthday: '27 dec'});
        this.setState({name: 'Znowu kliknięte'});
        this.setState({age: 11});
        this.setState({city: 'Gdansk', favcolor: 'green'})
};
    render() {
        return (
            <div>
                <div className="img-box">
                    <div className="landing container">
                        <Login/>
                        <Navigation />
                        <div className="big-box">
                            <div className="landing main-box">
                                <h1 className='title'>Zacznij pomagać!</h1>
                                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                                <img src="https://trello-attachments.s3.amazonaws.com/5c51a5e7dda6f54c2c44d7c6/5c51a5e7dda6f54c2c44d800/x/b1e349d572179de8aea6d1429e73e6e0/decoration.png" alt='background' className="decor"/>
                                <div className="buttons-big">
                                    <button className="button-big" onClick={this.handleClick}>Oddaj rzeczy</button>
                                    <button className="button-big" onClick={this.handleClick}>Zorganizuj zbiórkę</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <YellowBanner />
                <Steps />
                <br />
                <About />
                <Organizations />
                <Contact />
            </div>


        );
    }
}

export default Landing;
