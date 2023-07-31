import React from "react";
import ReactDOM from "react-dom/client";

function FirstComponent(){
    return <h2>First component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent/>);