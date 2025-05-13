import React from "react";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
      navigate("/Login");
    };
    
  return (
    <div className="full-screen flex flex-col items-center justify-center">
      <form 
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md border-white/20 text-white overflow-hidden"
        style={{ backgroundImage: "url('/Picture/Dog.jpg')"}}
        >
        
        <h3 className="text-2xl font-bold text-pink-700 text-center mb-6">
          Forgot Password
        </h3>
        
        <p className=" text-base mb-3 text-center text-pink-700 font-bold">
          Don't worry, even the best pups lose their leash. Let us help you reset!
        </p>
        
        <input
          typ="email"
          placeholder="Email"
          required
          className="w-full py-2 pl-10 pr-4 mb-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
         

        <button
          typ="submit"
          className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition text-pink-50"
          onClick={() => navigate("/Login")}
        >
          Send reset link
        </button>
      </form>
    </div>
  );
}
export default ForgotPassword;