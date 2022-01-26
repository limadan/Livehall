import React from 'react'
import Post from './post'

import {Link} from 'react-router-dom'

import Maria from '../imgs/users/maria.png'
import Isabela from '../imgs/users/isabela.png'
import '../styles/post-box.css'

export default function PostBox(){
    return <div className="post-box">
        <h3>Postagens mais recentes</h3>
	<Link to='/comentarios'>
          <Post profileImage = {Isabela} user = "Isabela"/>
	</Link>
	<Link to='/comentarios'>
          <Post profileImage = {Maria} user = "Maria"/>
	</Link>
        <Link to='/escrever-post'>
	  <button className="make-post">+</button>
	</Link>
    </div>
}