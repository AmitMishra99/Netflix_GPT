import React, { useState } from 'react'
import Header from './Header'

const Login = () => {


  const [ signIn , signUp] = useState(true)


  const toggleFeature = () =>{
    signUp(!signIn);
  }


return (
  <div>
    <Header />
    <img className='absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg" alt="" />
    <div className='bg-gradient-to-b from-black h-30 inset-0 absolute'></div>
    <div className=" relative text-white flex justify-center items-center min-h-screen p-4">
  <div className="bg-black/80  p-16 rounded-md w-full max-w-md">
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{signIn ? "Sign In" : "Sign Up"}</h1>
      <form className="space-y-4">
          {
          signIn ? "" : <input
          type="name"
          placeholder="Full Name "
          className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
        />
        }
        <input
          type="email"
          placeholder="Email or mobile number"
          className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
        />
      
        <button
          type="submit"
          className="w-full p-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors"
        >
         {signIn ? " Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
    <div className="flex justify-between items-center mt-4 text-sm">
      <a href="#" className="text-gray-400 hover:underline">Forgot password?</a>
      <div className="flex items-center space-x-2 text-gray-400">
        <input type="checkbox" id="remember-me" className="form-checkbox bg-gray-700 border-gray-600 text-red-600 rounded" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
    </div>
    <div className="mt-6 text-gray-400">
       {signIn ? "New to Netflix?" : "Already registered?"}
      <a onClick={toggleFeature} href="#" className="text-white hover:underline">{signIn ?  "Sign up now." : "Sign in now" }</a>
    </div>
    <div className="mt-4 text-xs text-gray-500">
      <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
    </div>
  </div>
</div>
  </div>
);
}

export default Login
