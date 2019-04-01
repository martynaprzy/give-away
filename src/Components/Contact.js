import React, { Component } from 'react';

class Contact extends Component{
    render() {
        return (
            <div className='contact container'>
                <form onSubmit='#'>
                    <h2 className='form-title'> Skontaktuj się z nami </h2>
                    <br/>
                    <legend className='form-legend'>Formularz kontaktowy</legend>
                    <label>
                        <input type="text" name="name" placeholder='Name' />
                    </label>
                    <label>
                        <input type="email" name="email" placeholder='Email' />
                    </label>
                    <textarea name="message" placeholder='Wiadomość'/>
                    <input type="submit" value="Wyślij" />
                </form>
                <div className='footer'>
                    <p>Copyright 2015 &copy; by Anna Dadej</p>
                    <div className='socialmedia'>
                        <i className="fab fa-facebook-square"/>
                        <i className="fab fa-instagram"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;