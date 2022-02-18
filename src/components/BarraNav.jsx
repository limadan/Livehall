import React, { useEffect } from 'react'
import {useRef, useState} from 'react'
import logo from '../imgs/LHLogo.png'
import perfil from '../imgs/imgPerfil.png'
import IconHome from '../imgs/icons/icon-home.png'
import IconSino from '../imgs/icons/icon-sino.png'
import '../styles/barra_nav.css';
import BarraPerfil from './barra-perfil.jsx'
import {Link} from 'react-router-dom'


export default function BarraNav(props){
    const[photoVisibility, setPhotoVisibility] = useState("hidden")
    const[linkVisibility, setLinkVisibility] = useState("visible")

    var style = "hidden"
    if(props.visible){
        style = "visible"
    }


    /*if(props.homepage){*/
      return(
        <React.Fragment>
            <div className="nav-bar">
                <header>
                        <img className="logo" src={logo}/>
                        <nav>
                            <Link to="/blog">BLOG</Link>
                            <Link to="/comunidade">COMUNIDADE</Link>
                            <Link to="/streams">STREAMS</Link>
                        </nav>
                        <nav>
                            <Link to="/login" className={linkVisibility}>
                            <span>Fazer login</span>
                            </Link>
                            <div className={photoVisibility}>
                                <img src={IconSino} className="icon-home"/>
                                <Link to="/perfil">
                                    <img src={perfil} className="icon-home"/>
                                </Link>
                            </div>
                        </nav>
                </header>
                <div className={style}>
                    <img src={props.image_1}/>
                    <img src={props.image_2}/>
                </div>
            </div>
        </React.Fragment>
      )
    /*}else{
      return(
        <React.Fragment>
            <User ref={user}/>
            <div className="nav-bar">
                <header>
                    <img className="logo" src={logo}/>
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
    }*/
}
