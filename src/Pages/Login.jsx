import React, { useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { API } from '../sevices/api';
const Login = () => {

    const emailref = useRef(null)
    const location = useLocation();
    const navigate = useNavigate();

    const { signInWithEmail, googleSignIn, setUser } = useContext(AuthContext)

    const from = location.state?.from || '/';

    console.log('location:', location);
    console.log('location.state:', location.state);
    console.log('from:', location.state?.from);


    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmail(email, password)
            .then(() => API.login({ email, password }))
            .then(() => {
                toast.success("Login successful");
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((e) => {
                toast.error('Please try again later with email', e)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => ({
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL,
            }))
            .then((userInfo) => API.login(userInfo))
            .then(() => {
                toast.success("Google Login successful");
                navigate(from, { replace: true });
            })
            .catch((e) => {
                console.log('Google sign in error:', e);
                toast.error('Google sign is not complate', e)
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl 
      p-8 rounded-2xl shadow-2xl border border-white/20 animate-fadeIn">

                <h2 className="text-3xl font-bold text-center text-black mb-6">
                    Welcome Back 👋
                </h2>

                <form onSubmit={handleSignIn} className="space-y-5">
                    <div>
                        <label className="text-black text-sm">Email</label>
                        <input
                            ref={emailref}
                            name='email'
                            type="email"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black 
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-black text-sm">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black  
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button className="w-full bg-indigo-500 hover:bg-indigo-600 
          text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                        Login
                    </button>
                    <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full rounded-lg p-3">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </form>

                <p className="text-center text-black mt-4">
                    Don't have an account?
                    <a href="/register" className="text-yellow-300 font-semibold ml-1">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;