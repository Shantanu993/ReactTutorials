import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
Img: "https://m.media-amazon.com/images/I/51rBwNT0gEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
Title: "American Prometheus",
Author: "Kai Bird",
}


const secondBook = {
Img: "https://m.media-amazon.com/images/I/51MUIvaD0XL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
Title: "Summer Sisters",
Author: "Judy Blume",
}


function BookList(){
    return <section className="bookList">
        <Books img={firstBook.Img} title={firstBook.Title} author={firstBook.Author}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto?</p>
            <button>click me!</button>
        </Books>
        <Books img={secondBook.Img} title={secondBook.Title}/>
    </section>;
}


function Books(props){
    const {img, title, author, children} = props;
    return <article className="books">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);