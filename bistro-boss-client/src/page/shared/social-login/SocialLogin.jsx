import { useContext } from "react";
import { FaGoogle } from "react-icons/fa"
import { AuthContext } from "../../../providers/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result)

            const saveUser = {name: result.user.displayName , email: result.user.email}
            fetch('http://localhost:5000/users' , {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                                // Swal.fire({
                                //     position: 'top-end',
                                //     icon: 'success',
                                //     title: 'User created successfully.',
                                //     showConfirmButton: false,
                                //     timer: 1500
                                // });
                                navigate(from, { replace: true });
                            
                        })

            // navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;