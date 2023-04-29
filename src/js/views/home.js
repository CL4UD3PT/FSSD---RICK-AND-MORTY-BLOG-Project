import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context);

	const handleMoreData = () => {
		actions.getMoreData();
	}

	// TODO: maybe there's a workaround to assign store.character to dataFiltered without useEffect()
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
			<div className="row">
				<button type="button" className="btn mx-auto col-lg-3 btn-primary my-4" onClick={()=>handleMoreData()}>Load more</button>
			</div>
		</div>
	)
};