import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";

const Signup = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSignup = e => {
        setError('');
        setSuccess('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 4) {
            setError("Please set 4 digit password");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("At least one uppercase letter required");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess("Signin Successful!!!");
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold mx-auto w-max m-8'>New to this website!!</h1>
            <form onSubmit={handleSignup} className=''>
                <div className='flex flex-col w-3/4 mx-auto h-screen m-8  '>
                    <input type="text" name="name" id="" className="p-4 mb-4 rounded-sm" placeholder="Name" />
                    <input type="email" name="email" className='p-4 mb-4 rounded-sm' placeholder="Email" />
                    <input type="password" name="password" className='p-4 mb-4 rounded-sm' placeholder="Password" />
                    <button type="submit" className="btn btn-secondary rounded-sm bg-sky-600 hover:bg-sky-800 border-gray-950 hover:border-black">SignUp</button>
                </div>
                {error && <h1 className="">{error}</h1>}
                {success && <h1>{success}</h1>}
            </form>

        </div>
    );
};

export default Signup;