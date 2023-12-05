import React from "react";
import ListRoutes from "./ListRoutes";
const routes = [
  {"type":"GET","path":"/toys"},
  {"type":"GET","path":"/toys/search?s=text&page=page"},
  {"type":"GET","path":"/toys/category/categoryname"},
  {"type":"POST","path":"/toys"},
  {"type":"PUT","path":"/toys/editId"},
  {"type":"DELETE","path":"/toys/delId"},
  {"type":"GET","path":"/toys/prices?page=page&min=min&max=max"},
  {"type":"GET","path":"/toys/single/id"},
  {"type":"POST","path":"/users"},
  {"type":"POST","path":"/users/login"}
];

const AppRich = () => {
  return (
    <div className="container">
        <h1 className="text-center">Api routes</h1>
        <ListRoutes routes = {routes}/>
    </div>
  );
};

export default AppRich;