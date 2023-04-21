import React, {useContext, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store} = useContext(Context);
	const [dataFiltered, setDataFiltered] = useState([]);

	return(
		<div className="container d-flex px-5 text-center mt-5">
			<div className="col-2">
				{/* <button className="btn">All</button> */}
				<button className="btn" onClick={() => {setDataFiltered(store.characters)}}>Characters</button>
				<button className="btn" onClick={() => {setDataFiltered(store.locations)}}>Locations</button>
				<button className="btn" onClick={() => {setDataFiltered(store.episodes)}}>Episodes</button>
			</div>
			<div className="col-10">
			<div className="row d-flex"> 
				{dataFiltered.map((element)=>{
					return <Card key={element.id} data={element} cardType="character"/>
				})}
			</div>
			</div>
		</div>
	)
};

// {/* <h2>Characters</h2> */}
// <div className="row d-flex flex-nowrap overflow-auto"> 
// {store.characters.map((char)=>{
// 	return <Card key={char.id} data={char} cardType="character"/>
// })}
// </div>
// {/* <h2>Locations</h2> */}
// <div className="row d-flex flex-nowrap overflow-auto">
// {store.locations.map((location)=>{
// 	return <Card key={location.id} data={location} cardType="location"/>
// })}
// </div>
// {/* <h2>Episodes</h2> */}
// <div className="row d-flex flex-nowrap overflow-auto">
// {store.episodes.map((episode)=>{
// 	return <Card key={episode.id} data={episode} cardType="episode"/>
// })}
// </div>