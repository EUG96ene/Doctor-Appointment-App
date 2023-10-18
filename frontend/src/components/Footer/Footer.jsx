import React from "react";
import {Link} from 'react-router-dom';
import Lacure from '../../assets/images/Lacure.png' 
import { RiLineLine, RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';



const sociaLinks =()=>[
    {
        path:"",
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon:<AiOutlineTwitter className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon:<AiFillFacebook className="group-hover:text-white w-4 h-5"/>
    },
];

const quickLinks01=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find A Doctor'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    },
];

const quickLinks02 = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: "/",
        display: "Get a Opinion",
    },
    {
        path: "/",
        display: "Find a Location",
    },
];
 const quickLinks03=[
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },
 ];

 const Footer=()=>{
    const year=new Date().getFullYear()

    return <footer className="pb-16 pt-10">
        <div className="container">
            <div className=" flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div className="logo">
    <img src={Lacure} alt='' style={{ width: '100px', height: 'auto' }} />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4"> Copyright @{year} all rights reserved</p>
            <div className="flex items-center gap-3 mt-4">
    {sociaLinks().map((link, index) => (
        <Link to={link.path} key={index}
        className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
            {link.icon}
        </Link>
    ))}
</div>



          </div>
          <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>
    <ul>
        {quickLinks02.map((item, index)=>(
            <li key={index} className="mb-4">
                <Link
                to={item.path}
                className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                </Link>
            </li>

        ))}
    </ul>
</div>
<div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
    <ul>
        {quickLinks03.map((item, index)=>(
            <li key={index} className="mb-4">
                <Link
                to={item.path}
                className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                </Link>
            </li>

        ))}
    </ul>
</div>
          <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
    <ul>
        {quickLinks01.map((item, index)=>(
            <li key={index} className="mb-4">
                <Link
                to={item.path}
                className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                </Link>
            </li>

        ))}
    </ul>
</div>
            </div>
        </div>
    </footer>

 };

   

export default Footer;