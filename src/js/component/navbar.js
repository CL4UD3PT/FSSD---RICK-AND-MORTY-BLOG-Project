import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<Link to="/">
				<h1 className="fs-4">Rick & Morty BlogWars</h1>
			</Link>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length > 0 ?
					<>{store.favorites.map((fav)=>{
						return <li key={fav} className="dropdown-item" >{fav}<button className="btn btn-outline-danger" onClick={()=>{
							actions.setFavorites(fav);
						}}>x</button></li>
					})}
					</> : <li className="dropdown-item">Add a favorite</li>}
				</ul>
			</div>
		</nav>
	);
};
