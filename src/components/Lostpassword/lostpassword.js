import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './lostpassword.css';
import picture from './uptimegaurd.png';
import ReCAPTCHA from 'react-google-recaptcha';


function Login() {
    const [error] = useState('');

    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        console.log('CAPTCHA Token:', recaptchaToken);
    };

    return (
        <div className="card-password-card">
            <form className='password-uptime'>
                <h4 className='password-picture'>
                    <img src={picture} alt='logo' className="logo-picture" />
                    Uptime Guard
                </h4>

                <h1 className='password-reset'>Password Reset.</h1>
                <div className='password-text'>
                    <p className='passwordinput-control'>We will send password reset link to<span className='password-span'> your e-mail </span> </p>
                    <label htmlFor="email" className='password-mail'>Enter your e-mail</label>
                    <input type='text' className='passwordform-control' placeholder='e.g. info@example.com' />
                    {error && <div className="passwordtext-danger">Email is required</div>}
                    <div className='password-recaptcha'>
                          <form onSubmit={handleSubmit}>
                            <ReCAPTCHA
                                sitekey="6LfviqcpAAAAAOhiIg7Nw_qsnRX_MIvxvzc86Pp5"
                                onChange={handleRecaptchaChange}
                            />
                        </form>
                    </div>

                    <button type="submit" className='btn btn-success password-submit-btn'>Send password reset link</button>

                    <div>

                        <p className='password-link'><a href='#' className='password-anchor'>Back to Log In</a></p>
                    </div>
                </div>

                <div className='password-terms'><a href='resister' className='password-anchoring'>Join now, </a><a href='resister' className='password-anchoring'>Create your FREE account</a></div>
                <p className='password-gaurd'>UptimeGaurd @ 2024. All Rights Reserved.</p>
            </form>
        </div>
    );
}

export default Login;
