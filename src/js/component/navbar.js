import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import schwifty from "../../img/get-schwifty.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<Link className="link-logo" to="/">
				<div className="d-flex align-items-center">
					<img className="logo" src={schwifty} alt="..."/>
					<h1 className="fs-2">Rick & Morty BlogWars</h1>
				</div>
			</Link>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length > 0 ?
					<>{store.favorites.map((fav)=>{
						return <li key={fav} className="dropdown-item d-flex justify-content-between" >{fav}<button className="btn btn-outline-danger" onClick={()=>{
							actions.setFavorites(fav);
						}}>x</button></li>
					})}
					</> : <li className="dropdown-item">Add a favorite</li>}
				</ul>
			</div>
		</nav>
	);
};
