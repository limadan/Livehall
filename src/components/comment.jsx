import React from "react";


export default function Comment(props){
    return <div className="comment">
        <img src={props.image} alt="user-img"/>
        <h3>{props.user}</h3>
        <p>Continue stremando! Não fique assim.</p>
        <footer>
            <button>RESPONDER</button>
            <button>DENUNCIAR</button>
        </footer>
    </div>
}