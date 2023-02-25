import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

export default function Nav({onSearch}){
    return (
    <div>
        <Link to= "/home">Home</Link>
        <Link to= "/About">About</Link>
        <SearchBar onSearch= 
            {onSearch}/>
    </div>);
}