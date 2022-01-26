import React from 'react';
import perfil from '../imgs/imgPerfil.png'
import '../styles/write-post.css'

export default function Postar(){
    return <React.Fragment>
            <div className="write-post">
                <img src={perfil}/>
                <textarea placeholder="Publique algo">
                </textarea>
            </div>
            <button id="publish">Publicar</button>
        </React.Fragment> 
}