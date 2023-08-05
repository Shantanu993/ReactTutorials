import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const books = [
{
// img: "https://m.media-amazon.com/images/I/51rBwNT0gEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
img: "./assets/book1.jpg",
title: "American Prometheus",
author: "Kai Bird",
id: 1,

},

{
// img: "https://m.media-amazon.com/images/I/51MUIvaD0XL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
img: "./assets/book2.jpg",
title: "Summer Sisters",
author: "Judy Blume",
id: 2,
},

]

{/* <Books img={firstBook.Img} title={firstBook.Title} author={firstBook.Author}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto?</p>
            <button>click me!</button>
        </Books>
        <Books img={secondBook.Img} title={secondBook.Title}/> */}

function BookList(){
    return <>
    <h1>Best Sellers</h1>
    <section className="bookList">
        {
            books.map((book) => {
                return (
                <>
                <Books {...book} key={book.id}/>
                </>
                )
            })
}</section>;
            </>
        
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