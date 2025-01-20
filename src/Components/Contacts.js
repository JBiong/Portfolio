import React, { useState, useRef } from 'react';
import { Facebook, Github, Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [emailError, setEmailError] = useState('');
    const dialogRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            validateEmail(value);
        }

        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(email && !emailRegex.test(email) ? 'Please enter a valid email address.' : '');
    };

    const showDialog = (message) => {
        if (dialogRef.current) {
            dialogRef.current.querySelector('.dialog-message').textContent = message;
            dialogRef.current.showModal();
            setTimeout(() => dialogRef.current.close(), 5000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError) {
            showDialog('Please correct the errors before submitting.');
            return;
        }

        emailjs
            .send('service_pwkxx1v', 'template_9uzwg8j', formData, '3yrmszeSEgDhL96Ki')
            .then(
                () => {
                    showDialog('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                () => showDialog('Failed to send message. Please try again.')
            );
    };

    return (
        <div className="home-container">
        <div className="contact-container">
            <div className="contact-form">
                <h2>Feel free to contact me.</h2>
                <div className="contact-info">
                <p>
                    If you want to know more you can contact me here.
                </p>
            </div>
                 <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {emailError && <p className="error">{emailError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" disabled={emailError}>Send Message</button>
                </div>
            </form>
            </div>

            

            <dialog ref={dialogRef} className="dialog-box">
                <div className="dialog-message"></div>
                <button onClick={() => dialogRef.current.close()}>Close</button>
            </dialog>
        </div>
        </div>
    );
};

export default Contact;
