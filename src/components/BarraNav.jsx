import React from 'react'
import logo from '../imgs/LHLogo.png'
import perfil from '../imgs/imgPerfil.png'
import IconHome from '../imgs/icons/icon-home.png'
import IconSino from '../imgs/icons/icon-sino.png'
import '../styles/barra_nav.css';
import BarraPerfil from './barra-perfil.jsx'
import {Link} from 'react-router-dom'


export default function BarraNav(props){
    var style = "hidden"
    if(props.visible){
        style = "visible"
    }

    if(props.homepage){
      return(
        <React.Fragment>
            <div className="nav-bar">
                <header>
                    <img class="logo" src={logo}/>
                        <nav>
                            <Link to="/blog">BLOG</Link>
                            <Link to="/comunidade">COMUNIDADE</Link>
                            <Link to="/streams">STREAMS</Link>
                        </nav>
		        <nav>
		            <button>
                              <img src={IconSino} className="icon-home"/>
		            </button>
		            <Link to="/perfil">
                              <img className="profile-photo" src= {perfil}/>
		            </Link>
	   	        </nav>
                </header>
                <div className={style}>
                    <img src={props.image_1}/>
                    <img src={props.image_2}/>
                </div>
            </div>
        </React.Fragment>
      )
    }else{
      return(
        <React.Fragment>
            <div className="nav-bar">
                <header>
                    <img class="logo" src={logo}/>
		    <Link to="/">
			<img className="icon-home" src={IconHome}/>
		    </Link>
                </header>
                <div className={style}>
                    <img src={props.image_1}/>
                    <img src={props.image_2}/>
                </div>
            </div>
        </React.Fragment>
      )
    }
}
