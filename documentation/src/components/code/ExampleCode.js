import React from "react";
import CodeBlock from "./CodeBlock";
const code = `fetch('http://localhost/toys')
.then(response => response.json())
.then(json => console.log(json));`;
const language = "js";

const ExampleCode = () => {
  return (
    <div className="container mt-3">
        <h1 className="text-center">Example code</h1>
        <CodeBlock code = {code} language={language}/>
    </div>
  );
};

export default ExampleCode;