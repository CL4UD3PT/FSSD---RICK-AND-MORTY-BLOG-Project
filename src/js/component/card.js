import React from "react";
import { Link } from "react-router-dom";

export const Card = ({data}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Gender: {data.gender}</p>
                    <p className="card-text">Status: {data.status}</p>
                    <p className="card-text">Species: {data.species}</p>
                    <Link to={"/single/" + data.id}>
                        <button className="btn btn-primary">More info</button>
                    </Link>
                </div>
        </div>
    );
};