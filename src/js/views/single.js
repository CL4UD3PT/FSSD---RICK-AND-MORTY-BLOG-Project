import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { capitalizeFirst } from "../utils/myUtils";

export const Single = () => {
	const { store } = useContext(Context);
	const params = useParams();
	const [ item, setItem ] = useState({});

	useEffect(() =>{
		getSingleData();
	}, [])

	const getSingleData = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/" + params.thetype + "/" + params.theid);
		const data = await response.json();
		setItem(data);
	}

	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row g-0">
						{item.image
						? <div className="col-lg-4">
							<img src={item.image} className="img-fluid h-100 rounded-start" alt="..."/>
						</div>
						: null}
					<div className={item.image ? "col-lg-8" : "col-lg-12"}>
						<h3 className="card-header">Rick & Morty {capitalizeFirst(store.schema)}</h3>
						<div className="card-body">
							<h3 className="card-title">{item.name}</h3>

							{Object.keys(item).map((itemKey, index)=>{
								if(typeof item[itemKey] != "object" && itemKey != "id" && itemKey != "name"){
									return <p key={index} className="card-text"><strong>{itemKey}:</strong> {item[itemKey]}</p>
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
