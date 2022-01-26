import React from 'react'
import {useRef} from 'react'
import '../styles/streams.css';

import stream1 from '../imgs/stream1.jpg'
import stream2 from '../imgs/stream2.png'
import stream3 from '../imgs/stream3.jpg'
import stream4 from '../imgs/stream4.png'
import stream5 from '../imgs/stream5.png'
import stream6 from '../imgs/stream6.png'
import stream7 from '../imgs/stream7.png'

import leftArrow from '../imgs/icons/left-arrow.png'
import rightArrow from '../imgs/icons/right-arrow.png'

export default function Streams(){

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
            <div className="streams">
            <h4>CATEGORIA</h4>
            <div>
            <button onClick={handleLeftClick}>
              <img src={leftArrow}/>
            </button>
                    <nav ref={carousel}>
                        <a href ="">
                          <img src={stream1}/>
                        </a>
                        <a href ="">
                          <img src={stream2}/>
                        </a>
                        <a href ="">
                          <img src={stream3}/>
                        </a>
                        <a href ="">
                          <img src={stream4}/>
                        </a>
                        <a href ="">
                          <img src={stream5}/>
                        </a>
                        <a href ="">
                          <img src={stream6}/>
                        </a>
                        <a href ="">
                          <img src={stream7}/>
                        </a>
                    </nav>
            <button onClick = {handleRightClick}>
              <img src={rightArrow}/>
            </button>
            </div>
        </div>
        </React.Fragment>
    )
}