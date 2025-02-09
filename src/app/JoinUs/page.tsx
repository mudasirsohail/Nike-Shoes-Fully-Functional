import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Home from '../continuewithGoogle/page';
// import Button from "../components/Button";

const page = () => {
  return (
    <>
    <div className="flex flex-col items-center py-10">
    <Image className="pb-5" src={"/NikeLogo.png"} width={40} height={10} alt="Logo" />
    <h2 className="uppercase text-center font-bold pb-5">
      BECOME A NIKE MEMBER
    </h2>
    <p className='w-80 text-center text-text-secondary-gray text-gray-400 pb-5'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
    <form action="" className="flex flex-col w-96">
      <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Email Address" />
      <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Password" />
      <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="First Name" />
      <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Last Name" />
      <input className="w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Date of Birth" />
      <p className='pb-3 text-text-secondary-gray text-sm text-gray-400 text-center'>Get a Nike Member Reward every year on your Birthday.</p>
      <select className="w-96 border-[#E5E5E5] rounded-md mb-2 text-gray-400 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" name="" id="">
        <option className='text-text-secondary-gray' value="">India</option>
        <option className='text-text-secondary-gray' value="">Afghanistan</option>
        <option className='text-text-secondary-gray' value="">France</option>
        <option className='text-text-secondary-gray' value="">Belgium</option>
        <option className='text-text-secondary-gray' value="">Canada</option>
        <option className='text-text-secondary-gray' value="">Italy</option>
        <option className='text-text-secondary-gray' value="">Turkey</option>
        <option className='text-text-secondary-gray' value="">UK</option>
        <option className='text-text-secondary-gray' value="">Finland</option>
        <option className='text-text-secondary-gray' value="">Romania</option>
        <option className='text-text-secondary-gray' value="">Saudia Arabia</option>
        <option className='text-text-secondary-gray' value="">United States</option>
        <option className='text-text-secondary-gray' value="">Russia</option>
        <option className='text-text-secondary-gray' value="">China</option>
        <option className='text-text-secondary-gray' value="">Bangladesh</option>
      </select>
      <div className='flex gap-5 mt-1'>
        <div className='border-[#E5E5E5] rounded-md py-4 text-gray-400 border-[2px] w-2/4 text-center text-text-secondary-gray'>Male</div>
        <div className='border-[#E5E5E5] rounded-md py-4  text-gray-400 border-[2px] w-2/4 text-center text-text-secondary-gray'>Female</div>
      </div>
      <div className="flex justify-between items-center py-7">
        <div>
          <input type="checkbox" id="remember" />
          <label className="ml-2 pl-2 cursor-pointer text-text-secondary-gray text-gray-400" htmlFor="remember">
            Sign up for emails to get updates from Nike on products, offers and your Member benefits
          </label>
        </div>
      </div>
      <p className="text-text-secondary-gray text-center text-gray-400 pb-6">By creating an account, you agree to Nike's <Link className="underline" href="#">Privacy Policy</Link> and <Link className="underline" href="#">Terms of Use</Link>.</p>
      <button className='w-[380px] h-[40px] bg-black text-white'> JOIN US</button>
      <p className="text-center mt-[15px] "> <span className="text-text-secondary-gray text-gray-400 ">Already a Member? </span><span className="underline ">Join Us.</span></p>
    </form>
  </div>
  <Home/>
  </>
  )
}

export default page
// "use client";

// import { useState } from "react";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     gender: "",
//     country: "",
//   });

//   const handleSignup = async () => {
//     try {
//       const response = await fetch("/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Signup successful!");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSignup();
//       }}
//     >
//       {/* Add your input fields here and bind them to formData */}
//       <input
//         type="text"
//         placeholder="Email Address"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       {/* Other input fields */}
//       <button type="submit">JOIN US</button>
//     </form>
//   );
// };

// export default SignupPage;
