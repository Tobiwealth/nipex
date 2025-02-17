'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image'

const Herosection = () => {
	const [index, setIndex] = useState(0);
	const images = [
	    "/images/hero1.svg", "/images/hero2.svg", "/images/hero3.svg"
    ];

    useEffect(() => {
	    const interval = setInterval(() => {
	        setIndex((prevIndex) => (prevIndex + 1) % images.length);
	    }, 3000); // Change every 3 seconds

	    return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full flex flex-col lg:flex-row gap-4 px-8 py-6 ">
		    <div className="bg-[url('/images/Nipexbackground.svg')] bg-no-repeat bg-cover bg-center w-full lg:w-1/2 flex-1 rounded-[16px]">
				<div className="h-full bg-[url('/images/spheres.svg')] rounded-[16px] bg-no-repeat bg-cover bg-center ">
				   <div className="hero-background rounded-[16px] h-full">
					    <h1 className="flex flex-col justify-center gap-0 font-montserrat font-bold text-[2.5rem] md:text-[3.2rem] lg:text-[5rem] leading-[70px] md:leading-[95px] lg:leading-[120px] text-white p-4 py-8 ">
							<span>NipeX</span> 
							{" "}
							<span>Management</span> 
							{" "}
							<span>Information</span> 
							{" "}
							<span>System</span> 
						</h1>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2 flex-1 relative rounded-[16px] bg-white overflow-hidden">
			   <div className="">
				   <div className="absolute hero-image-backgroud inset-0 rounded-[16px]">
				   </div>
				   <div
				        className="flex w-[100%] h-full transition-transform duration-700 ease-in-out"
				        style={{ transform: `translateX(-${index * 100}%)` }}
				    >
				        {images.map((src, i) => (
				            <Image 
				                key={i} 
				                src={src}
				                alt="hero picture" 
				                width={811} 
				                height={934}
				                className="rounded-[0px] "
			                />
				        ))}
				    </div>
				
	                <div className="absolute bottom-8 left-10 flex gap-2">
	                	<div className={`w-10 h-[5px] ${index === 0 ? "bg-white" : "bg-primary" }`}></div>
	                	<div className={`w-10 h-[5px] ${index === 1 ? "bg-white" : "bg-primary" }`}></div>
	                	<div className={`w-10 h-[5px] ${index === 2 ? "bg-white" : "bg-primary" }`}></div>
	                </div>
                </div>
			</div>
		</div>
	)
}

export default Herosection