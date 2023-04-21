import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store} = useContext(Context);

	return(
		<div className="container px-5 text-center mt-5">
			<h2>Characters</h2>
			<div className="row d-flex flex-nowrap overflow-auto"> 
				{store.characters.map((char)=>{
					return <Card key={char.id} data={char} cardType="character"/>
				})}
			</div>
			<h2>Locations</h2>
			<div className="row d-flex flex-nowrap overflow-auto">
				{store.locations.map((location)=>{
					return <Card key={location.id} data={location} cardType="location"/>
				})}
			</div>
			<h2>Episodes</h2>
			<div className="row d-flex flex-nowrap overflow-auto">
				{store.episodes.map((episode)=>{
					return <Card key={episode.id} data={episode} cardType="episode"/>
				})}
			</div>
		</div>
	)
};