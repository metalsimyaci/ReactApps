import React from 'react';
import API from '../api';

export default class Login extends React.Component {
    state = {
        mail: '',
        password: ''
    }

    mailHandleChange = event => {
        this.setState({ mail: event.target.value });
    }
    passwordHandleChange = event => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = event => {
        debugger;
        console.log('geldim');
        const body = {
            mail: this.state.mail,
            password: this.state.password
        };

        API.post(`Auth/Login`, { body })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Mail:
                        <input type="text" name="mail" onChange={this.mailHandleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.passwordHandleChange} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }


}