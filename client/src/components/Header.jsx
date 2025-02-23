import React, { useEffect, useState } from 'react';
import { userDetails } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="px-8 md:px-32 flex flex-wrap items-center justify-between w-full bg-blue-700 text-white text-lg py-4 shadow-md">
      {/* User Info */}
      <div className="flex flex-col">
        <h2 className="font-semibold">Name: <span className="font-normal">{userDetails.name}</span></h2>
        <h2 className="font-semibold">Roll: <span className="font-normal">{userDetails.roll_number}</span></h2>
      </div>

      {/* Exam Details */}
      <div className="text-center">
        <p className="font-semibold">Subject: <span className="font-normal">{userDetails.subject}</span></p>
        <h2 className="font-semibold">Remaining: <span className="text-yellow-300 font-bold">1:29</span></h2>
      </div>

     

      {/* Profile Image */}
      <div className="flex gap-4">
        <img 
          src={userDetails.profile_img} 
          alt="Profile" 
          className="w-20 h-20 border border-white rounded-full object-cover"
        />
      </div>

      {/* Finish Exam Button */}
      <button onClick={()=>navigate(`/finish-exam/${userDetails.roll_number}`)} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition">
        Finish Exam
      </button>
    </div>
  );
};

export default Header;
