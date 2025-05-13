import React from "react";
import { LuDog } from "react-icons/lu";
import { FaKey } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
       
        <h1 className="text-4xl font-bold text-pink-50 mb-6 text-center drop-shadow-lg">
            Woof Wall
        </h1>
      <form 
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg  rounded-2xl shadow-xl w-full max-w-md border border-white/20"
        >
        <div
        className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl border-white/20 text-pink-200 overflow-hidden"
        style={{ backgroundImage: "url('/Picture/Dog3.jpg')"}} 
        >
        <h3 className="text-2xl font-bold text-pink-700 text-center mb-6">Register</h3>

        <div className="relative mb-4">
          <input 
          type="text" 
          placeholder="Username" 
          required 
          pattern="^[a-zA-Z0-9]{4,15}$"
          title="4-15 characters. Only letters and numbers."
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <LuDog className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="relative mb-4">
          <input 
          type="password" 
          placeholder="Password" 
          required 
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="At least 6 characters with letters and numbers."
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <FaKey className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="relative mb-4">
          <input 
          type="text" 
          placeholder="Email" 
          required 
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <SlEnvolopeLetter className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition c"
        >
          Register
        </button>

        <p className="text-md text-center mt-4 text-pink-700 font-bold">
        Already part of the pack? Time to wag back in! {" "}

          <span
            onClick={() => navigate("/Login")}
            className="underline cursor-pointer hover:text-rose-400"
          >
           Login
          </span>
          </p>
          </div>
      </form>
    </div>
    
  );
}
export default Signup;