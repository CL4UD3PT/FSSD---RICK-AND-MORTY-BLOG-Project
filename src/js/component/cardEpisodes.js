import React from "react";

export const CardEpisode = ({data}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> {data.name} </h5>
                <p className="card-text"> {data.air_date} </p>
                <p className="card-text"> {data.episode} </p>
                <p className="btn btn-primary">Go somewhere</p>
            </div>
        </div>
    );
};