import React from "react";
import ReactDOM from "react-dom/client";

function BookList(){
    return <section>
        <Books />
    </section>;
}

function Books(){
    return <article>
        <Image />
        <Title />
        <Author />
    </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/51rBwNT0gEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />;
const Title = () => <h2>American Prometheus</h2>;
const Author = () => <h2>Kai Bird</h2>;



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);