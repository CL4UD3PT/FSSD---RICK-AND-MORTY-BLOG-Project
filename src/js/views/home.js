import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const {store} = useContext(Context);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [dataType, setDataType] = useState('character');

	// TODO: maybe there's a workaround to assign store.characters to dataFiltered without using useEffect()
	useEffect(()=>{
		setDataFiltered(store.characters)
	}, [store.characters]);

	return(
		<div className="container">
			<div className="row">
				<div className="col-2 d-flex flex-column align-items-start">
					{/* <button className="btn">All</button> */}
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${dataType === "character" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {setDataFiltered(store.characters); setDataType('character')}}>Characters</span>
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${dataType === "location" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {setDataFiltered(store.locations); setDataType('location')}}>Locations</span>
					<span className={`fs-4 btn border-0 border-start border-3 rounded-0 ${dataType === "episode" ? "border-primary" : "border-secondary-subtle"}`} onClick={() => {setDataFiltered(store.episodes); setDataType('episode')}}>Episodes</span>
				</div>
				<div className="col-10">
					<div className="row d-flex"> 
						{dataFiltered.map((element)=>{
							return <Card key={element.id} data={element} cardType={dataType}/>
						})}
					</div>
				</div>
			</div>
		</div>
	)
};