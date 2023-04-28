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
			<div className="row">
				<div className="col-2 d-flex flex-column align-items-start">
					{/* <button className="btn">All</button> */}
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${store.schema === "character" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {actions.setDataFiltered(store.character); actions.setSchema('character')}}>Characters</span>
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${store.schema === "location" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {actions.setDataFiltered(store.location); actions.setSchema('location')}}>Locations</span>
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${store.schema === "episode" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {actions.setDataFiltered(store.episode); actions.setSchema('episode')}}>Episodes</span>
				</div>
				<div className="col-10">
					<div className="row d-flex"> 
						{store.dataFiltered.map((element)=>{
							return <Card key={element.id} data={element}/>
						})}
					</div>
				</div>
			</div>
		</div>
	)
};