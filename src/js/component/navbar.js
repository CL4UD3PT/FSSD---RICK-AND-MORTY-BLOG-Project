import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import schwifty from "../../img/get-schwifty.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const [search, setSearch] = useState("");
	const [autoComplete, setAutoComplete] = useState([]);

	const handleSearchString = (searchString) => {
		let find = [];
		// encontrar uma forma de não mexer no array store.dataFiltered ou de devolver o valor dele.
		if (searchString.length > 0){
			find = store.dataFiltered.filter((char) => char.name.toLowerCase().includes(searchString.toLowerCase()));
			// setAutoComplete(find);
		} else {
			find = store.dataFiltered;
			// setAutoComplete('');
		}
		actions.setDataFiltered(store[store.schema].filter((char) => char.name.toLowerCase().includes(searchString.toLowerCase())));
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
					<div className="dropdown-auto-search">
						{autoComplete.length > 0 ?
							autoComplete.map((item) => <div key={item.id} className="dropdown-item">{item.name}</div>)
							: null
						}
					</div>
				</div>

				{/* FAVORITES */}
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						Favorites <span className="badge text-bg-warning">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end " >
						{store.favorites.length > 0
						?<>{store.favorites.map((fav)=>{
							return <li key={fav} className="dropdown-item d-flex justify-content-between align-items-center" >{fav}<button className="btn badge text-bg-warning" onClick={()=>{
								actions.setFavorites(fav);
							}}>X</button></li>
						})}</>
						: <li className="dropdown-item">Add a favorite</li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};
