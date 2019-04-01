import React, { Component } from 'react';

class Steps extends Component{
    render() {
        return (
            <div className="steps-box">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src="https://trello-attachments.s3.amazonaws.com/5c51a5e7dda6f54c2c44d7c6/5c51a5e7dda6f54c2c44d800/x/b1e349d572179de8aea6d1429e73e6e0/decoration.png" alt='background' className="decor"/>
                <br/>
                <div className='inner-box'>
                    <div>
                        <i className="fas fa-hand-holding-heart"></i>
                        <h5>Wybierz rzeczy</h5>
                        <p>
                            ubrania, zabawki, sprzęt i inne
                        </p></div>
                    <div>
                        <i className="fas fa-archive"></i>
                        <h5>Spakuj je</h5>
                        <p>Skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <i className="fas fa-sitemap"></i>
                        <h5>Zdecyduj komu chcesz pomóc</h5>
                        <p>Wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <i className="fab fa-ups"></i>
                        <h5>Zamów kuriera</h5>
                        <p>Kurier przyjedzie w dogodnym terminie</p>
                    </div>

                </div>
                <div className='button-box'>
                    <br/>
                    <button className='button-big button-wide'>ZAŁÓŻ KONTO</button>
                </div>
            </div>
        )
    }

}
export default Steps;