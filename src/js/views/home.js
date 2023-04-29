import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context);

	// TODO: maybe there's a workaround to assign store.character to dataFiltered without using useEffect()
	useEffect(()=>{
		actions.setDataFiltered(store.character)
		store.schema = "character"
	}, [store.character]);

	return(
		<div className="container">
			<div className="row d-flex"> 
				{store.dataFiltered.map((element)=>{
					return <Card key={element.id} data={element}/>
				})}
			</div>
		</div>
	)
};