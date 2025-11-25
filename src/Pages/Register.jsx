import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl 
      p-8 rounded-2xl shadow-2xl border border-white/20 animate-slideUp">

                <h2 className="text-3xl font-bold text-center text-black mb-6">
                    Create Account ✨
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="text-white text-sm">Full Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black 
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black 
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Your email"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">PhotoURL</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black 
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Your photo URL"
                        />
                    </div>

                    <div>
                        <label className="text-white text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-200 text-black 
              placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            placeholder="Create password"
                        />
                    </div>

                    <button className="w-full bg-indigo-500 hover:bg-indigo-600 
          text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                        Register
                    </button>
                    <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-lg p-3">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </form>

                <p className="text-center text-black/80 mt-4">
                    Already have an account?
                    <a href="/login" className="text-yellow-300 font-semibold ml-1">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;