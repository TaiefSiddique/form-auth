import React from 'react';

const Signup = () => {
    const handleSignup= e =>{
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold mx-auto w-max m-8'>New to this website!!</h1>
            <form onSubmit={handleSignup} className=''>
               <div className='flex flex-col w-3/4 mx-auto h-screen m-8  '>
               <input type="email" name="email" className='p-4 mb-4 rounded-sm'/>
                <input type="password" name="password"  className='p-4 mb-4 rounded-sm'/>
                <button type="submit" className="btn btn-secondary rounded-sm">SignUp</button>
               </div>
            </form>
        </div>
    );
};

export default Signup;