import React from 'react'
import {useRef} from 'react'
import '../styles/recomendations.css';


import Elena from '../imgs/Elena.png';
import Elisa from '../imgs/users/Elisa.jpg';
import Stream1 from '../imgs/stream1.jpg';
import Stream7 from '../imgs/stream7.png';
import Stream4 from '../imgs/stream4.png';

import leftArrow from '../imgs/icons/left-arrow.png'
import rightArrow from '../imgs/icons/right-arrow.png'

export default function Recomendacoes(props){
    const recomendations = useRef(null)

    function handleRight(e){
        e.preventDefault();
        recomendations.current.scrollLeft += recomendations.current.offsetWidth;
    }

    function handleLeft(e){
        e.preventDefault();
        recomendations.current.scrollLeft -= recomendations.current.offsetWidth;
    }

    return(
        <React.Fragment>
        <input type="text" placeholder="Pesquisa"/>

        <div className="recomendations">
            <h4>Recomendações do dia</h4>
            <div>
                <button onClick={handleLeft}>
                <img src={leftArrow}/>
                </button>
                    <nav ref={recomendations}>
                        <a className="third">
                        <img src={Stream1}/>
                        </a>
                        <a className="third">
                        <img src={Elisa}/>
                        </a>
                        <a className="third">
                        <img src={Elena}/>
                        </a>
                        <a className="third">
                        <img src={Stream7}/>
                        </a>
                        <a className="third">
                        <img src={Stream4}/>
                        </a>
                    </nav>
                    <button onClick={handleRight}>
                <img src={rightArrow}/>
                    </button>
            </div>
        </div>
        </React.Fragment>
    )
}