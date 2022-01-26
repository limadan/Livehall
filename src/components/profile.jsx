import React from 'react'
import perfil from '../imgs/imgPerfil.png'
import IconInstagram from '../imgs/icons/icon-instagram.png'
import IconTwitter from '../imgs/icons/icon-twitter.png'
import IconTwitch from '../imgs/icons/icon-twitch.png'
import {Link} from 'react-router-dom'
import '../styles/profile.css'

export default function Perfil(){
    return <div className = "profile">
        <img src={perfil}/>

        <div>
            <h2>Nome Canal</h2>
            <h4>N° Seguidores</h4>
        </div>




        <div className = "biography">
            <h3>Biografia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Fusce velit massa, scelerisque eu convallis 
                sit amet, elementum in nulla. Vivamus scelerisque 
                nisi ipsum, ut dignissim metus sollicitudin.</p>
        </div>
        

        <div className = "social">
            <h3>Social</h3>
            <a>
		<img src={IconInstagram}/>
		Instagram
	    </a>
            <a>
		<img src={IconTwitter}/>
		Twitter
	    </a>
            <a>
		<img src={IconTwitch}/>
		Twitch
	    </a>
        </div>

        <div className = "interactions">
            <p>
              <h4>99</h4>
              <span>Seguidores</span>
            </p>
            <p>
              <h4>13</h4>
              <span>Lives</span>
            </p>
            <p>
              <h4>10</h4>
              <span>Posts</span>
            </p>
            <p>
              <h4>10</h4>
              <span>Blogs</span>
            </p>
            <Link to="/config-conta">⋮</Link>
        </div>
    </div>
}