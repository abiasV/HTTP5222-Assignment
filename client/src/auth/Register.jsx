import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import RegisterForm from "../components/RegisterForm";

import { toast } from 'react-toastify';
import { register } from '../actions/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            await register({name,email,password});
            toast.success("Register success.Please Login.");
            history("/login");

        } catch (err) {
            console.log(err)
            if(err.response.status === 400) toast.error(err.response.data)
        }
    }
    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm 
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;