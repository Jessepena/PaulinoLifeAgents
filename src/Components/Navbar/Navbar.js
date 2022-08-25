import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<NavLink to="/Home">
					<img src={logo} alt="logo" className="logo navbar-brand"></img>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarSupportedContent"
				>
					<div className="navbar-nav mb-2 mb-lg-0 gap-5">
						<NavLink
							to="/Home"
							style={({ isActive }) =>
								isActive ? { fontWeight: "bold" } : undefined
							}
							className="nav-link"
						>
							Home
						</NavLink>
						<NavLink
							to="/AilPlus"
							style={({ isActive }) =>
								isActive ? { fontWeight: "bold" } : undefined
							}
							className="nav-link"
						>
							AIL Plus
						</NavLink>
						<NavLink
							to="/ChildSafeKit"
							style={({ isActive }) =>
								isActive ? { fontWeight: "bold" } : undefined
							}
							className="nav-link"
						>
							Child Safe Kit
						</NavLink>
						<NavLink
							to="/FreeWillKit"
							style={({ isActive }) =>
								isActive ? { fontWeight: "bold" } : undefined
							}
							className="nav-link"
						>
							Free Will Kit
						</NavLink>
						{/* <NavLink
							to="/Medfacts"
							style={({ isActive }) =>
								isActive ? { fontWeight: "bold" } : undefined
							}
							className="nav-link"
						>
							Medfacts
						</NavLink> */}
						<a className="btn btn-primary" href="#form" role="button">
							Get Yours
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
