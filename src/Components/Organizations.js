import React, { Component } from 'react';

class Organizations extends Component {
    render() {
        return (
            <div className='organizations-box container'>
                <div className='organizations-box-top'>
                    <h3>Komu pomagamy?</h3>
                    <img src="https://trello-attachments.s3.amazonaws.com/5c51a5e7dda6f54c2c44d7c6/5c51a5e7dda6f54c2c44d800/x/b1e349d572179de8aea6d1429e73e6e0/decoration.png" alt='background' className="decor"/>
                    <div className='orgs-box'>
                        <p>Fundacjom</p>
                        <p>Organizacjom pozarządowym</p>
                        <p>Lokalnym zbiórkom</p>
                    </div>
                    <p className='orgs-description'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują
                    </p>

                </div>
                <div className='orgs-box-lower'>
                    <div className='organizations-cell'>
                        <div className='left-org-box'>
                            <h4>Fundacja "Dbam o Zdrowie"</h4>
                            <h5>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h5>
                        </div>
                        <div className='right-org-box'>
                            <p>ubrania, jedzenie, sprzęt AGD, meble zabawki</p>
                        </div>
                    </div>
                    <div className='organizations-cell'>
                        <div className='left-org-box'>
                            <h4>Fundacja "Dla Dzieci"</h4>
                            <h5>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h5>
                        </div>
                        <div className='right-org-box'>
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </div>
                    <div className='organizations-cell'>
                        <div className='left-org-box'>
                            <h4>Fundacja "Bez domu"</h4>
                            <h5>Cel i misja: Pomoc dla osób bezdomnych</h5>
                        </div>
                        <div className='right-org-box'>
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        )
    }
}
export default Organizations;