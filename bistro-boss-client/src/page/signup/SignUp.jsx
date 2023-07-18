import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import SocialLogin from "../shared/social-login/SocialLogin";


const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [disabled, setDisabled] = useState(true);
    const captcha = useRef(null);
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

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name , email: data.email}
                        fetch('http://localhost:5000/users' , {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(from, { replace: true });
                            }
                        })
                    })
                    .catch(error => console.log(error))
            })
    }

    console.log(watch("email"));


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password needs to be of atleast 6 characters.</span>}
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required.</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Needs to be less than 20 characters.</span>}
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
                                <button className="btn btn-primary" disabled={false}>Sign up</button>
                            </div>
                            <Link to='/login' className=''>Log in</Link>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;


/**
 * button jodi dei form er vithor, button click korle submit hoye jabe. Karon amra disi form onsubmit. eijonno validation ei btn click korle form tai submit hoye jay. So to solve this amader button shoriye input e onchange dibo captcha er jonno
 */