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
		const response = await fetch("https://rickandmortyapi.com/api/character/" + params.theid);
		const data = await response.json();
		console.log(data); 
		setItem(data);
	}


	return (
		<div className="jumbotron">
			<p>id: {item.id}</p>
			<h1>Name: {item.name}</h1>
			<p>status: {item.status}</p>
			<p>species: {item.species}</p>
			<p>type: {item.type}</p>
			<p>gender: {item.gender}</p>
			{/* <p>origin: {item.origin}</p>
			<p>location: {item.location}</p> */}
			<p>image: {item.image}</p>
			{/* <p>episode: {item.episode}</p> */}
			<p>url: {item.url}</p>
			<p>created: {item.created}</p>
		</div>
	);
};
