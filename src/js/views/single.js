import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
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
			<div className="row">
				{item.image
				? <div className="col-4">
	            	<img src={item.image} className="card-img-top" alt="..."/>
				</div>
				: null}
				<div className="col-8">
					<h2>{item.name}</h2>

					{Object.keys(item).map((itemKey, index)=>{
						if(typeof item[itemKey] != "object" && itemKey != "id" && itemKey != "name"){
							return <p key={index}><strong>{itemKey}:</strong> {item[itemKey]}</p>
						}
					})}
				</div>
			</div>
		</div>
	);
};
