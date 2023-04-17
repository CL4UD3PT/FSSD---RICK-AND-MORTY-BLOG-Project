import React from "react";

export const CardLocation = ({data}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> {data.name} </h5>
                <p className="card-text"> {data.type} </p>
                <p className="card-text"> {data.dimension} </p>
                <p className="btn btn-primary">Go somewhere</p>
            </div>
        </div>
    );
};