import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'NAME', email: 'EMAIL@EXAMPLE.COM', phone: 'OPTIONAL', message: 'WRITE ME WHAT\'S ABOUT' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="mailing">
                <div>
                    <textarea
                        id="nameValue"
                        name="name"
                        onChange={this.handleChange}
                        placeholder=""
                        required
                        value={this.state.name}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <div>
                    <textarea
                        id="emailValue"
                        name="email"
                        onChange={this.handleChange}
                        placeholder=""
                        required
                        value={this.state.email}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <div>
                    <textarea
                        id="phoneValue"
                        name="phone"
                        onChange={this.handleChange}
                        placeholder=""
                        required
                        value={this.state.phone}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <div>
                    <textarea
                        id="messageValue"
                        name="message"
                        onChange={this.handleChange}
                        placeholder=""
                        required
                        value={this.state.message}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
            </form>
        )
    }

    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }
    handleSubmit() {
    }
}