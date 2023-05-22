import React from "react";
import Gift from "../Components/Gift";
import { Link } from "react-router-dom";
import GiftEditForm from "../Components/GiftEditForm";


export default function Show() {
    return (
        <div>
        <h1>Show</h1>
        <Gift />
        
        <Link to="/gifts/:id">Back</Link>
        <button onClick={GiftEditForm}>Edit</button>
        </div>
    );
    }
