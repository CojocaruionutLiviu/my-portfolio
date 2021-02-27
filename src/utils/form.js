import React from 'react';
import emailjs from 'emailjs-com';
import './../pages/style.css'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1roz64t', 'template_1tj75l7', e.target, 'user_zbRNu5XKe8aEuNGDUsNvp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />

            <input type="text" name="from_name" placeholder="YOUR NAME" autocomplete="off" />

            <input type="email" name="to_reply" placeholder="EMAIL" autocomplete="off" />

            <input type="text" name="phone" placeholder="PHONE NUMBER" autocomplete="off" />

            <textarea name="message" placeholder="LEAVE ME A MESSAGE" />
            <input type="submit" value="Send" className="btn" autocomplete="off" />
        </form>
    );
}