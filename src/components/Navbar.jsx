import { Link, NavLink, useNavigate } from 'react-router-dom'

import { FiUsers, FiHome, FiSettings } from 'react-icons/fi'

const Navbar = () => {

	const history = useNavigate();
	const activeLink = 'font-semibold transition-all ease text-lg';
	const normalLink = 'text-gray-400 hover:text-gray-500 transition-all ease text-lg';
	
	return (
		<header className="bg-main-bg px-6 py-2 lg:px-16 lg:py-6 fixed top-0 w-full z-40">
			<div className="max-w-7xl mx-auto flex">
				<div className="text-md lg:text-lg lg:hidden font-semibold py-2">
					Fadi Ayad
				</div>
				<div className="hidden lg:flex lg:items-center mx-auto">
					<div className="flex gap-20">
						<NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink }>
							<p className=" ">
								About
							</p>
						</NavLink>
						<NavLink to="/experiences" className={({ isActive }) => isActive ? activeLink : normalLink }>
							<p className=" ">
								Experiences
							</p>
						</NavLink>
						<NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink }>
							<p className=" ">
								Projects
							</p>
						</NavLink>

						<NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : normalLink }>
							<p className=" ">
								Contact
							</p>
						</NavLink>


						
					</div>

				</div>
				
			</div>
		</header>
	)
}

export default Navbar;