import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/rdc-logo.svg";

const Header = () => {
	const location = useLocation();

	// function pathMathRoute(route) {
	// 	if (route === location.pathname) return true;
	// }

	return (
		<header className='w-full bg-white border-b shadow-sm sticky top-0 z-50 py-5'>
			<div className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
				<div>
					<img
						className='h-5 cursor-pointer'
						src={logo}
						alt='Logo Realtor Clone'
					/>
				</div>
				<nav>
					<ul className='flex space-x-5'>
						<li>
							<Link
								className={`${
									location.pathname === "/"
										? "text-black border-b-red-500"
										: "text-gray-400 border-b-transparent"
								} py-3 text-sm border-b-[3px]`}
								to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`${
									location.pathname === "/offers"
										? "text-black border-b-red-500"
										: "text-gray-400 border-b-transparent"
								} py-3 text-sm border-b-[3px]`}
								to='/offers'>
								Offers
							</Link>
						</li>
						<li>
							<Link
								className={`${
									location.pathname === "/sign-in"
										? "text-black border-b-red-500"
										: "text-gray-400 border-b-transparent"
								} py-3 text-sm border-b-[3px]`}
								to='/sign-in'>
								Sign In
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
