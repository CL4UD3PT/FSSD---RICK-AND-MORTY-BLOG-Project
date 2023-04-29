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
		<header className="p-3 mb-3 border-bottom">
		    <div className="container">
      			<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Link className="link-logo d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none" to="/">
						<div className="">
							<img className="logo" src={schwifty} alt="..."/>
						</div>
					</Link>

					<h3 className="main-title nav col-12 h-100 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ps-0 ps-lg-1">Rick & Morty BlogWars</h3>

					<ul className="nav col-12 h-100 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><span className={`nav-link pb-0 px-2 border-primary fw-bold ${store.schema === "character" ? "link-dark border-bottom" : "link-secondary"}`} onClick={() => {actions.setDataFiltered(store.character); actions.setSchema('character')}}>Characters</span></li>
						<li><span className={`nav-link pb-0 px-2 border-primary fw-bold ${store.schema === "location" ? "link-dark border-bottom" : "link-secondary"}`} onClick={() => {actions.setDataFiltered(store.location); actions.setSchema('location')}}>Locations</span></li>
						<li><span className={`nav-link pb-0 px-2 border-primary fw-bold ${store.schema === "episode" ? "link-dark border-bottom" : "link-secondary"}`} onClick={() => {actions.setDataFiltered(store.episode); actions.setSchema('episode')}}>Episodes</span></li>
					</ul>

					{/* FAVORITES */}
					<div className="btn-group mb-3 mb-lg-0">
						<button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Favorites <span className="badge my-badge text-bg-warning">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.length > 0
								?<>{store.favorites.map((fav)=>{
									return <li key={fav} className="dropdown-item px-1 d-flex justify-content-between align-items-center" >{fav}
									<button className="btn btn-warning ms-2 badge"
										onClick={()=>{actions.setFavorites(fav)}}>X</button>
									</li>
								})}</>
								: <li className="dropdown-item">Add a favorite</li>
							}
						</ul>
					</div>

					{/* AUTO-SEARCH */}
					<div className="input-group auto-search-container col-12 col-lg-3 mb-3 mb-lg-0">
						<input type="text" className="form-control" onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={(e)=>{handleSearchString(search)}} value={search} placeholder="Search..." aria-label="Search"></input>
						<button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span className="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li className="dropdown-item">Search suggestions</li>
						</ul>
						{autoComplete.length > 0
							?<div className="dropdown-auto-search rounded shadow">
								{autoComplete.map((item) => <div key={item.id} className="dropdown-item p-1">{item.name}</div>)}
							</div>
							:null
						}
					</div>
		     	</div>
    		</div>
  		</header>
	);
};
