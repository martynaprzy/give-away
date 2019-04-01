import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="login">
                <button className='login' id='login'>Zaloguj</button>
                <button className='login' id='signup'>Załóż konto</button>
            </div>
        )
    }
}
export default Login;