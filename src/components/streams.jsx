import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
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
    let [streams, setStreams] = React.useState([]);
    const getStreams = ()=>{
      axios.get('http://localhost:8000/streams').then((res)=>{
        const data = res.data
        console.log(data)
        setStreams(data)
      })
    }

    React.useEffect(()=>getStreams(),[])

    const carousel = useRef(null);

    const handleRightClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const handleLeftClick = (e)=>{
        e.preventDefault();
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
                      {
                        streams.map(stream=>
                          <a href={stream.link} target="_blank">
                            <img src={stream1}/>
                          </a>
                      )
                    }
                      <a href="" target="_blank">
                            <img src={stream1}/>
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