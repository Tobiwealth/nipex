import React from 'react'
import Image from 'next/image'

interface StyleProps{
	title: string;
	src: string;
}
const Card: React.FC<StyleProps> = ({title, src}) => {
	return (
		<div className={`bg-primary w-[340px] h-[138.87px] flex flex-col gap-[40px] px-3 py-6 rounded-[8px]`}>
			<div className="flex relative text-white">
			    <Image src={`/icons/${src}.svg`} alt="hero picture" width={35} height={35}/>
			</div>
			<div className="flex justify-between items-center text-white">
				<p className="text-base font-medium font-neueMontreal ">{title}</p>
			</div>
		</div>
	)
}

export default Card