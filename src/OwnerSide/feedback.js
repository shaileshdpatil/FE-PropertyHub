import React from 'react';
import './abc.css';
import axios from 'axios';

class feedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    submitForm = () => {
        const { name, email, message } = this.state;
        const data = { name, email, message }
        
        axios.post("http://localhost:3000/api/feedbackssadd", data)
            .then((res) => {
                alert("successfully inserted");
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <form id="contact" style={{ marginTop: '70px' }}>
                        <h3>Feedback Form</h3>
                        <h4>Feedback to admin</h4>
                        <fieldset>
                            <input placeholder="Your name" type="text" onChange={(e) => this.setState({ name: e.target.value })} tabIndex="1" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" onChange={(e) => this.setState({ email: e.target.value })} tabIndex="2" required />
                        </fieldset>
                        <fieldset>
                            <textarea type="text" placeholder="Your Comment goes to here" onChange={(e) => this.setState({ message: e.target.value })} tabIndex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" onClick={this.submitForm}>Submit</button>
                        </fieldset>
                        <p className="copyright">Designed by <a href="https://shailu43.000webhostapp.com" title="shailu">shailu</a></p>
                    </form>
                </div>
            </>
        )
    }
}
export default feedback;