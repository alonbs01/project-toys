import React from "react";

const ItemRoute = ({type, path}) => {
  return (
    <div className="p-2">
        <div className="card shadow p-1">
        <h4 className="text-center p-3">{type}</h4>
        <h5 className="p-3">{path}</h5>
        </div>
    </div>
  );
};

export default ItemRoute;