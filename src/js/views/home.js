import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="text-center mt-5">
			<h1>Rick and Morty Blog</h1>
			{store.characters.map(()=>{
				return <Card />
			})}
		</div>
	)
};