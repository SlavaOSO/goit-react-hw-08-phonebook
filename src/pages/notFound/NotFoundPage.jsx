import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage () {
    return(
        <div>
            <h1> Not Found </h1>
            <h2>Maybe this will help you:</h2>
            <ul>
                <li><Link to={"/"}>HomePage</Link></li>
                {/* <li><Link to={"/movies"}>Movies</Link></li> */}
            </ul>
        </div>
    )
}