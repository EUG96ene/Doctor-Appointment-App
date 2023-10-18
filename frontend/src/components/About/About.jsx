import React from "react";
import sample26 from '../../assets/images/sample26.jpg';
import aboutcard from '../../assets/images/about-card.png';
import {Link} from 'react-router-dom';

const About= () =>{
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* about Img  */} 
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={sample26} alt=""/>
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] 
                lg:right-[22%]">
                    <img src={aboutcard} alt=""/>
                </div>
            </div>
           {/* about content   */} 

    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="heading">Pround to be one of the nations best</h2>
        <p className="text_para">For 10 years in a row ,we are committed to offering a range of services that are tailored to meet the unique needs of our
         clients and to deliver exceptional patient care.</p>
         <p className="text_para mt-[30px]">Health is a daily habit, shaping a journey of happiness, energy, and hope. Explore our offerings:
          medical directory, online appointments, trusted consultations, subscription-based health plans, practice management software, health information
           management services, convenient diagnostics, and reliable medicine delivery. Trust Lacure Medicare for effective treatment of diseases.</p>
           <Link to='/'><button className="btn">Learn More</button></Link>
    </div>


            </div>
        </div>
    </section>
};
export default About;