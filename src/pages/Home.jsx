 import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumCircle } from 'react-icons/ai'
import { SiMedium } from 'react-icons/si'


const Home = () => {

	
	return (
		<div className="">
			<div className="mt-0 lg:mt-10 h-screen flex items-center">

				<div className="lg:w-1/2 mx-auto text-center text-2xl lg:leading-[52px]">
					<div className="xl:w-2/3 mx-auto relative mb-8 lg:mb-12 flex items-center ">
						<div className="w-36 h-36 lg:w-56 lg:h-56 mx-auto rounded-full bg-black z-10">
						</div>

						<img src="bat.gif" className="lg:w-28 w-20 absolute right-[-1rem] bottom-[-1rem] rounded-full" />
					</div>
					<span className="text-xl lg:text-3xl font-semibold">Fadi Ayad</span>
					<div className="text-sm lg:text-xl text-gray-600">&lt;Full-Stack Web Developer&gt;</div>
				 	
					<div className="px-12 flex items-center justify-between lg:flex-row lg:justify-between mt-10 lg:mt-12">
						<Link  to='/' className=" my-1.5 lg:my-0 px-2 lg:w-auto transition-all ease hover:underline hover:text-gray-700 flex items-center gap-4 lg:gap-3">
							<AiFillGithub className="text-md" />
							<p className="text-sm hidden lg:inline"> Github</p>
						</Link>
						<Link  to='/' className="transition-all  my-1.5 lg:my-0 px-2 lg:w-auto ease hover:underline hover:text-gray-700 flex items-center gap-4 lg:gap-3">
							<AiFillLinkedin className="text-md" />
							<p className="text-sm hidden lg:inline"> LinkedIn</p>
						</Link>
						<Link  to='/' className="transition-all  my-1.5 lg:my-0 px-2 lg:w-auto  ease hover:underline hover:text-gray-700 flex items-center gap-4 lg:gap-3">
							<SiMedium className="text-md" />
							<p className="text-sm hidden lg:inline"> Medium</p>
						</Link>
						<Link  to='/' className="transition-all  my-1.5 lg:my-0 px-2 lg:w-auto  ease hover:underline hover:text-gray-700 flex items-center gap-4 lg:gap-3">
							<AiOutlineTwitter className="text-md" />
							<p className="text-sm hidden lg:inline"> Twitter</p>
						</Link>

						
						
					</div>
				</div>

			</div>

			<div className="py-4">
				<div className="scrollRef flex-col text-center">
					<p className="text-gray-600 text-sm lg:text-md active">Get to know more</p>
					<h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
				</div>
				<div className="q text-center text-md lg:text-2xl font-semibold mt-20 lg:mt-24">Who am i?</div>
				<div className="who flex justify-center items-center">
					<div className="lg:w-2/3 flex text-center py-2 text-sm lg:text-lg text-gray-800 leading-6 lg:leading-9">
						I'm Fadi Ayad, a Full-Stack Web Developer. I hold a degree in Information Systems and Software Engineering.
						Throughout the years of my study, I've been creating digital solutions, including web applications, online platforms, and various games. Beyond coding, i 
						find joy in exploring the pixel art world!

					</div>
				</div>
				


				<div className="q text-center text-md lg:text-2xl font-semibold mt-14 lg:mt-16">What i do?</div>
				<div className="what flex justify-center items-center">
					<div className=" lg:w-2/3 flex text-center py-2 text-sm lg:text-lg text-gray-800 leading-6 lg:leading-9">
						I Specialize in creating web applications that brings ideas to life. i've designed & developed several systems, including entreprise-level platforms.
						My focus is on delivering precision and professionalism while translating concepts into valuable digital solutions. 

					</div>
				</div>
				<div className="text-center py-2 mb-10">
					<span className="text-sm lg:text-lg cursor-pointer transition-all ease font-semibold text-gray-400 hover:text-gray-500 border-gray-400 border-b-1 hover:border-gray-500 border-dashed hover:border-solid">
						View my Work &raquo;
					</span>
				</div>

			</div>
				
		</div>

	)
}

export default Home;