import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core'
import './login.css';
import google from '../img/googli.png'






const Login = (props) => {
    const [data, handelData] = useState({
        email: '',
        password: ''

    })

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const [error, setError] = useState(
        {
            emailError: "",
            passwordError: ""
        }
    )

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    const [button, setButton] = useState(true)

    const handelChange = (e) => {
        const { name, value } = e.target;
        handelData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (data.email !== '' && data.password !== '') {
            setButton(false)
        }
    }
    // console.log(data)



    const handelClick = () => {
        alert('Signed in')
        // if (data.email === '' && data.password === '') {
        //     setError({
        //         emailError: "Email cannot be empty",
        //         passwordError: "Password cannot be empty"
        //     })
        //     setButton(true)
        // }

    }
    console.log(button)

    return (
        <form className="body">
            <div className="mainBody">
                <h2>Sign In</h2>
                <label>
                    Email <br />
                    <TextField type="email"
                        onChange={validateEmail} name="email" id="standard-basic" fullWidth required />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                        {message}
                    </div>

                </label>
                <p>{error.emailError}</p>
                <label>
                    <br />Password <br />
                    <TextField value={data.password} onChange={handelChange} name="password" id="standard-basic" type="password" fullWidth required />
                    <br /><br />
                </label>
                <p>{error.passwordError}</p>

                <Button type="Submit" color='primary' variant="contained" onClick={handelClick} >Sign in</Button>   {/*disabled={button ? true : false} */}
                <Typography className="pass">
                    <a href='#'>
                        Forgot Password?
                </a>
                </Typography>
                <div className="google_signin" onClick={handelClick}>
                    <img src={google} />
                    <h4>Sign in with google</h4>
                </div>

                <div className="div2">
                    <div className="body2">
                        <h3>Not a member yet?</h3>
                        <p>Join us and be part of the family.</p>


                        <Button variant="outlined"  >
                            
                                Sign up now
                
                            </Button>
                    </div>
                </div>
            </div>


        </form>
    )
}

export default Login
