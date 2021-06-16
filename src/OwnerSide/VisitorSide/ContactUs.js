import React from 'react';
import styles from './ContactUs.module.css';
import axios from 'axios';
import { HeaderNav } from './HeaderNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterNav from './FooterNav';
class ContactUs extends React.Component {
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
                toast.success('Thank you for getting in touch! ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                <HeaderNav />
                <div className={styles.wrapperAbout}>
                    <div className={styles.container}>
                        <form id="contact" style={{ marginTop: '50px' }}>
                            <h3 style={{ fontWeight: 'bold', color: 'blue' }}>Contact-us Form</h3>
                            <div className="slogen">
                            </div>
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
                                <button name="submit" type="button" id="contact-submit" onClick={this.submitForm}>Submit</button>
                            </fieldset>
                            <p className="copyright">Designed by <a href="https://shailu43.000webhostapp.com" title="shailu" style={{ color: 'red', fontWeight: 'bolder' }}>Patil</a></p>
                        </form>
                    </div>
                </div>
                <ToastContainer />
                <FooterNav />
            </>
        )
    }
}
export default ContactUs;