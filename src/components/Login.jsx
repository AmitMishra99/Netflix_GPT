import React, { useRef, useState } from "react";
import validation from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { netflix_background, user_logo } from "../utils/constants";

const Login = () => {
  const [signIn, signUp] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleFeature = () => {
    signUp(!signIn);
  };
  const formValidation = () => {
    const msg = validation(email.current.value, password.current.value);
    setError(msg);
    if (msg) {
      return;
    }

    if (!signIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_logo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("UserEmail Not Found");
        });
    }
  };

  return (
    <div>
      <img
        className="absolute w-full h-full object-cover"
        src={netflix_background}
        alt=""
      />
      <div className=" relative text-white flex justify-center items-center min-h-screen p-4">
        <div className="bg-black/80  p-16 rounded-md w-full max-w-md">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {signIn ? (
                ""
              ) : (
                <input
                  ref={name}
                  type="name"
                  placeholder="Full Name "
                  className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email or mobile number"
                className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
              />

              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-gray-800 rounded-md text-white border-none focus:outline-none focus:ring-2"
              />
              <p className="text-red-500 ml-2 mt-0">{error}</p>

              <button
                type="submit"
                onClick={formValidation}
                className="w-full p-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors"
              >
                {signIn ? " Sign In" : "Sign Up"}
              </button>
            </form>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-gray-400 hover:underline">
              Forgot password?
            </a>
            <div className="flex items-center space-x-2 text-gray-400">
              <input
                type="checkbox"
                id="remember-me"
                className="form-checkbox bg-gray-700 border-gray-600 text-red-600 rounded"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
          </div>
          <div className="mt-6 text-gray-400">
            {signIn ? "New to Netflix?" : "Already registered?"}
            <a
              onClick={toggleFeature}
              href="#"
              className="text-white hover:underline"
            >
              {signIn ? "Sign up now." : "Sign in now"}
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
