import React from "react";
import ItemRoute from "./ItemRoute";

const ListRoutes = ({ routes }) => {
  const routeslist = routes.map(r => (<ItemRoute
    key={r.type + r.path}
    type={r.type}
    path={r.path}
  />));
  return (
    <div>
      { routeslist }
    </div>
  );
};

export default ListRoutes;