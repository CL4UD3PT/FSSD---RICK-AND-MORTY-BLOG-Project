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
                    <div className="d-flex justify-content-between align-items-center">
                        <button className={`btn fav-btn fs-4 ${store.favorites.includes(data.name)?"text-danger" : "text-secondary"}`} onClick={()=>{
                            actions.setFavorites(data.name);
                        }}><i className={`${store.favorites.includes(data.name) ? "fa-solid" : "fa-regular"} fa-heart`}></i></button>
                        <Link to={"/single/" + cardType + "/" + data.id}>
                            <button className="btn btn-primary btn-sm py-1">Show info</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};