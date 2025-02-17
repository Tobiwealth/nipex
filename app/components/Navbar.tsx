import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.svg'

const Navbar = () => {
	return (
		<nav className="bg-primary flex justify-between items-center px-8 md:px-12 py-4">
			<div>
				<Image 
	                src={logo}
	                alt="logo" 
	                width={172} 
	                height={50}
	                className=""
                />
			</div>
			<div>
				<h2 className="text-cent font-bold text-lg md:text-xl font-roboto cursor-pointer">CONTACT US</h2>
			</div>
		</nav>
	)
}

export default Navbar