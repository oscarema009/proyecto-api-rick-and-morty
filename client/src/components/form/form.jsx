import React from "react";
import { validation } from "./validation";

export default function Rorm(){
    const [userData, setUserData] = React.useState({
        username:"",
        password:"",
    })

    const [errors, setErrors] =React.useState({
        username:"",
        password:"",
    })

    function handleImputChange(e){
        setUserData({...userData,[e.target.name]:e.target.value});
        setErrors(validation({...userData,[e.target.name]:e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return<div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
            id="username"
            name="username"
            placeholder="Ingrese el usuario..."
            type="text"
            value={userData.username}
            onChange={handleImputChange}
            />
            <p>{errors.username}</p>
            <label htmlFor="password">Password</label>
            <imput
            id="password"
            name="password"
            type="text"
            value={userData.password}
            onChange={handleImputChange}
            />
            <p>{errors.password}</p>
            <imput type="submit"/>
        </form>
    </div>
}