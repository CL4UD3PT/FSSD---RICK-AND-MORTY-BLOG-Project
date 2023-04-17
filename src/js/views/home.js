import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation";
import { CardEpisode } from "../component/cardEpisodes";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="text-center mt-5">
			<h1>Rick and Morty Blog</h1>
			<h2>Characters</h2>
			<div className="row d-flex flex-nowrap overflow-auto">
				{store.characters.map((char)=>{
					return <CardCharacter key={char.id} data={char}/>
				})}
			</div>
			<h2>Locations</h2>
			<div className="row d-flex flex-nowrap overflow-auto">
				{store.locations.map((location)=>{
					return <CardLocation key={location.id} data={location}/>
				})}
			</div>
			<h2>Episodes</h2>
			<div className="row d-flex flex-nowrap overflow-auto">
				{store.episodes.map((episode)=>{
					return <CardEpisode key={episode.id} data={episode}/>
				})}
			</div>
		</div>
	)
};