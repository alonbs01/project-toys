import React from "react";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

const CodeBlock = ({ code, language }) => {
    return (
        <Highlight className={language}>
            {code}
        </Highlight>
    );
};

export default CodeBlock;