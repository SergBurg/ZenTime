import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Login()
{
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5173/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: SetEmail, password: SetPassword}),
        });

        const result = await response.json();
        setMessage(result.message);
    };
    const handleRegister2 = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5175/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: SetEmail, password: SetPassword}),
        });

        const result = await response.json();
        setMessage(result.message);
    };
    function handleSubmit(event)
    {
        event.preventDefault();b
    }
    return  (
        <div className='d-flex justify-content-center align-items-center bg-primary' >
            
            <div className='p-3 bg-white w-25 '>
                <div>
                    <div className='mb-3 '>
                    <label htmlFor="email"> Email</label>
                    <input type="email" placeholder="Enter email" className='form-control'    /> 
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="password"> Password</label>
                    <input type="Password" placeholder="Enter a password" className='form-control' onChange={e => SetEmail(e.target.value)} /> 
                    </div>
                    <button className='btn btn-'> </button>
                </div>

                <div>
                    <div className='mb-3 '>
                    <label htmlFor="email"> Email</label>
                    <input type="email" placeholder="Enter email" className='form-control'    /> 
                    </div>
                    <div className='mb-3'>  
                    <label htmlFor="password"> Password</label>
                    <input type="Password" placeholder="Enter a password" className='form-control' onChange={e => SetEmail(e.target.value)} /> 
                    </div>
                    <button className='btn btn-'> </button>
                </div>
            </div>
        </div>
    )
}
export default Login;