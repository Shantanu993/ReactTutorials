import React from "react";
import ReactDOM from "react-dom/client";

const Img ="https://m.media-amazon.com/images/I/51rBwNT0gEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
const Title = "American Prometheus";
const Author = "Kai Bird";


function BookList(){
    return <section>
        <Books />
        <Books />
    </section>;
}

function Books(){
    return <article>
        <img src={Img} alt="" />
        <h2>{Title}</h2>
        <h4>{Author}</h4>
    </article>
}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);