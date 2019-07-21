import React from "react";
import ListComics from "../components/ListComics/ListComics";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <ListComics comics={[{key: 1, title: 'a title', price: 2}]} />
        </div>
    );
}

export default Home;
