import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({data, cardType}) => {
    const {store, actions} = useContext(Context);

    return (
        <div className="card mx-2 p-0" style={{width: "18rem"}}>
            <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Gender: {data.gender}</p>
                    <p className="card-text">Status: {data.status}</p>
                    <p className="card-text">Species: {data.species}</p>
                    <div className="d-flex justify-content-between">
                        <button className={`btn ${store.favorites.includes(data.name)?"btn-danger" : "btn-outline-danger"}`} onClick={()=>{
                            actions.setFavorites(data.name);
                        }}>+</button>
                        <Link to={"/single/" + cardType + "/" + data.id}>
                            <button className="btn btn-primary">More info</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};