import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import schwifty from "../../img/get-schwifty.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const [search, setSearch] = useState("");
	const [autoComplete, setAutoComplete] = useState([]);

	const handleSearchString = (searchString) => {
		let find = store[store.schema].filter((char) => char.name.toLowerCase().includes(searchString.toLowerCase()));
		searchString.length == 0 ? setAutoComplete('') : setAutoComplete(find);
		actions.setDataFiltered(find);
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<div className="container">
				{/* LOGO */}
				<Link className="link-logo" to="/">
					<div className="d-flex align-items-center">
						<img className="logo" src={schwifty} alt="..."/>
						<h1 className="fs-2">Rick & Morty BlogWars</h1>
					</div>
				</Link>

				{/* SEARCH */}
				<div className="auto-search-container">
					<div className="auto-search">
						<input type="text" onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={(e)=>{handleSearchString(search)}} value={search}></input>
					</div>
					{autoComplete.length > 0
						?<div className="dropdown-auto-search">
							{autoComplete.map((item) => <div key={item.id} className="dropdown-item">{item.name}</div>)}
						</div>
						:null
					}
				</div>

				{/* FAVORITES */}
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						Favorites <span className="badge text-bg-warning">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length > 0
							?<>{store.favorites.map((fav)=>{
								<li key={fav} className="dropdown-item d-flex justify-content-between align-items-center" >{fav}<button className="btn badge text-bg-warning"
									onClick={()=>{actions.setFavorites(fav)}}>X</button>
								</li>
							})}</>
							: <li className="dropdown-item">Add a favorite</li>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
