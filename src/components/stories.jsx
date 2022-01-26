import React from 'react'
import {useRef} from 'react'
import '../styles/stories.css';

import Maria from '../imgs/users/maria.png'
import Barbara from '../imgs/users/Barbara.png'
import Claudete from '../imgs/users/Claudete.png'
import Camila from '../imgs/users/Camila.png'
import Marina from '../imgs/users/Marina.png'
import Vanessa from '../imgs/users/Vanessa.png'
import Julia from '../imgs/users/Julia.png'
import Mia from '../imgs/users/Mia.png'
import Cris from '../imgs/users/Cris.png'

import leftArrow from '../imgs/icons/left-arrow.png'
import rightArrow from '../imgs/icons/right-arrow.png'

export default function Stories(props){

    const carousel = useRef(null);


    const handleRightClick = (e)=>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const handleLeftClick = (e)=>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    return(
        <React.Fragment>
        <div class="stories">
            <h4>Stories que você pode gostar</h4>
            <div>
            <button onClick={handleLeftClick}>
		            <img src={leftArrow}/>
	          </button>
            <nav ref={carousel}>
                <a href ="">
                  <img src = {Maria}/>
                </a>
                <a href ="">
                  <img src = {Barbara}/>
                </a>
                <a href ="">
                  <img src = {Claudete}/>
                </a>
                <a href ="">
                  <img src = {Camila}/>
                </a>
                <a href ="">
                  <img src = {Marina}/>
                </a>
                <a href ="">
                  <img src = {Vanessa}/>
                </a>
                <a href ="">
                  <img src = {Julia}/>
                </a>
                <a href ="">
                  <img src = {Mia}/>
                </a>
                <a href ="">
                  <img src = {Cris}/>
                </a>
              </nav>
            <button onClick={handleRightClick}>
		          <img src={rightArrow}/>
	        </button>
          </div>
        </div>
        </React.Fragment>
    )
}
