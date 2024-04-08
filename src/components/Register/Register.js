import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css';
import picaso from './uptimegaurd.png';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate=useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError('');
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")

        if (username === 'Arjunajj' && password === 'password') {
            setError('');
        } else {
            setError('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="card-register-card">
            <form onSubmit={handleSubmit} className='register-onsubmit'>
                <h4 className='register-time'>
                    <img src={picaso} alt='logo' className="logo-picaso" />
                    Uptime Guard
                </h4>

                <h1 className='register-create'>Create Your FREE Account</h1>
                <p className='register-ahead'>It takes just 30s. Go ahead!</p>
                <div className='register-label'>
                    <label htmlFor="name" className='register-name'>Enter Your Name</label>
                    <input type='text' className='registerform-control' placeholder='e.g. Arjun joes' onChange={handleNameChange} />
                    {error && <div className="registertext-danger">Name is required</div>}

                    <label htmlFor="email" className='register-mail'>Enter Your e-mail</label>
                    <input type='text' className='registerform-control' placeholder='e.g. info@example.com' onChange={handleUsernameChange} />
                    {error && <div className="registertext-required">Email is required</div>}

                    <label htmlFor="password" className='register-password'>Enter Your Password<span className='register-min'> min. 6 characters </span></label>
                    <input className='registerform-control' type='password' placeholder='******' onChange={handlePasswordChange} />
                    {error && <div className="registertext-password">Password is required</div>}

                    <label htmlFor="choose" className='register-selective'>How did u findout above the Uptime Gaurd<span className='register-option'> (optional) </span></label>
                    <select class='register-interaction' id='interactionSelect' placeholder='Please choose the first interaction you remember'>
                        <option value=''>Please choose the first interaction you remember</option>
                        <option value=''>Website article, blog(not ours)</option>
                        <option value='meeting'>Review site, (e.g.G2,Capterra,...)</option>
                        <option value='call'>Search engine (e.g. Google,Bing,...)</option>
                        <option value='email'>App store listing(Appstore, Google play)</option>
                        <option value='link'>You Tube</option>
                        <option value='sell'>Recommended by a friend</option>
                        <option value='gmail'>Message group(e.g. Discord,Slack,Telegram,...)</option>
                        <option value='sim'>Event(e.g. Workshop,Conference or Meet up)</option>
                        <option value='far'>Podcast</option>
                        <option value='gen'>Others</option>
                    </select>
                    <div className='register-checkbox'>
                        <label htmlFor="rememberMe">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            />
                            <span style={{ marginLeft: '5px' }}>Inform me about new feautres and updates</span>
                        </label>
                    </div>
                    <button type="submit" className='btn btn-success register-submit-btn'>Register now</button>
                </div>

                <div className='register-term'><a href='#' className='register-anchor'>Already have an account? </a></div>
                <p className='register-uptimegaurd'>UptimeGaurd @ 2024. All Rights Reserved.</p>
            </form>
        </div>
    );
}

export default Login;
