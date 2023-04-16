import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<h1 className="fs-4">Rick & Morty BlogWars</h1>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					<li className="dropdown-item" >Action</li>
					<li className="dropdown-item" >Another action</li>
					<li className="dropdown-item" >Something else here</li>
				</ul>
			</div>
		</nav>
	);
};
