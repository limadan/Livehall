import React from 'react'
import '../styles/categories.css';

import CS from '../imgs/CS.png'
import LOL from '../imgs/LOL.png'
import MINECRAFT from '../imgs/MINECRAFT.png'
import VALORANT from '../imgs/VALORANT.png'

export default function Categorias(){
    return(
        <React.Fragment>
        <div class="categories">
            <h4>CATEGORIAS</h4>
                <nav>
                    <a href ="">
                        <img src={CS}/>
                    </a>
                    <a href ="">
                        <img src={LOL}/>
                    </a>
                    <a href ="">
                        <img src={MINECRAFT}/>
                    </a>
                    <a href ="">
                        <img src={VALORANT}/>
                    </a>
                </nav>
        </div>
        </React.Fragment>
    )
}