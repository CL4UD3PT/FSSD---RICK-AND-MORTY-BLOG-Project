import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [ item, setItem ] = useState({});

	useEffect(() =>{
		getSingleCharacter();
	}, [])

	const getSingleCharacter = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/" + params.thetype + "/" + params.theid);
		const data = await response.json();
		console.log(data); 
		setItem(data);
	}


	return (
		<div className="jumbotron">
			<h1>Name: {item.name}</h1>
			{Object.keys(item).map((itemKey, index)=>{
				if(typeof item[itemKey] != "object"){
					return <p key={index}>{itemKey}: {item[itemKey]}</p>
				}
			})}
		</div>
	);
};
