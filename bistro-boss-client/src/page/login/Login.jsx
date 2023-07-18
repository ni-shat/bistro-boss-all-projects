import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import Swal from 'sweetalert2';



const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const captcha = useRef(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location)

    useEffect( () => {
        loadCaptchaEnginge(6); 
    } , []);

    const validate_Captcha = () => {
        const user_captcha_value = captcha.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            console.log('matched')
        }
        else {
            setDisabled(true);
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captcha} name="captcha" placeholder="please write the above text" className="input input-bordered" />
                            <button onClick={validate_Captcha} className='btn btn-outline btn-xs mt-1'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={false}>Login</button>
                        </div>
                        <Link to='/signup' className=''>Create new account</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;