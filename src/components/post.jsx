import React from 'react'

import IconComment from '../imgs/icon-comment.png'
import IconShare from '../imgs/icon-share.png'


import '../styles/post.css'

export default function Post(props){
    return <div className="post">
        <header>
            <img src={props.profileImage}/>
            <h4>{props.user}</h4>
        </header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce velit massa, scelerisque eu convallis sit amet, elementum 
        in nulla. Vivamus scelerisque nisi ipsum, ut dignissim metus 
        sollicitudin a...
        </p>
        <footer>
            <button>UP</button>
            <button>
                <img src={IconComment}/>
                Comentar
            </button>
            <button>
                <img src={IconShare}/>
            </button>
            <button>...</button>
        </footer>
    </div>

}