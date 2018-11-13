import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            subject: '',
            email: '',
            textArea: '',
            validate: 'false'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.nameMessage = 'hidden',
        this.subjectMessage = 'hidden',
        this.emailMessage = 'hidden',
        this.textAreaMessage = 'hidden'
    }

   
        handleSubmit = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        validateForm = (e) => {
            e.preventDefault();
            const form = document.querySelector('#contact-form');
            const inputEmailVal = document.querySelector('.input-email').value;
            const regEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
            const result = [];
           
            if (this.state.name.length < 3) {
                this.nameMessage = '';
                console.log(this.nameMessage);
            } else {
                this.nameMessage ='hidden'
                result.push(true);
            }

            if (this.state.subject.length < 3) {
                this.subjectMessage = ''
            } else {
                this.subjectMessage ='hidden';
                result.push(true);
            }

            if (regEx.test(inputEmailVal)) {
                this.emailMessage = 'hidden'
                result.push(true);
            } else {
                this.emailMessage ='';
            } 
            
            if (this.state.textArea.length < 10) {
                this.textAreaMessage = ''
            } else {
                this.textAreaMessage = 'hidden';
                result.push(true);
            }

            this.setState({validate: 'true'})

            if(result.length === 4) {
                form.submit()
            }
        
        }

    render() {
        return (
            <div className="contact-main-container">

                 <div className="contact-info">
                    <ul>
                           <li>
                                <i className="fas fa-mobile-alt"></i>
                                <a href="#">+447380447737</a>
                           </li>
                           <li>
                                <i className="fas fa-envelope-square"></i>
                                <a href="#">ekdrms264@gmail.com</a>
                           </li>
                           <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <span>Ko.jiijii</span>
                           </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <fieldset>
                        <legend>Send a Message</legend>
                        <form  id="contact-form" action="/sendMail" method="post">
                           
                            <span>Name</span>
                            <input type="name" name="name"
                                      value={this.state.name}
                                      onChange={this.handleSubmit}
                             />
                            <p className={`input-name-message input-error-message ${this.nameMessage}`}>Name has to be longer than 2 charcaters</p>
  
                            <span>Subject</span>
                            <input type="text" name="subject"
                                      value={this.state.subject}
                                      onChange={this.handleSubmit}
                             />
                            <p className={`input-subject-message input-error-message ${this.subjectMessage}`}> Subject has to be at least 3 charcaters</p>

                            <span>Email</span>
                            <input type="email" name="email"
                                      className="input-email"
                                      value={this.state.email}
                                      onChange={this.handleSubmit}
                             />
                            <p className={`input-email-message input-error-message ${this.emailMessage}`}> It has to be a valid email addres</p>
                        
                            <span>Message</span><textarea  type="text" name="textArea"
                                      className="text-area"
                                      value={this.state.textArea}
                                      onChange={this.handleSubmit}></textarea>

                            <p className={`input-text-area-message input-error-message ${this.textAreaMessage}`}> It has to be a minimum of 10 characters</p>

                            <button className="form-button" onClick={this.validateForm}>Send</button>
                   
                        </form>
                    </fieldset>                   
                </div>
               
            </div>
        )
    }
}

export default Contact;