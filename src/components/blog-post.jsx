import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/blog-post.css'

export default function BlogPost(props){
    if(props.style === '1'){
      return <div className="blog-post">
          <img src = {props.image} alt="img-blog"/>
          <h4>Categoria</h4>
          <h3>Título</h3>
          <p>{props.text}</p>
	  <Link to="blog-page">Ler Mais</Link>
      </div>
    }else if(props.style==='2'){
      return <div className="blog-post-main">
	    <Link to="/blog-page">
              <h3>Título</h3>
              <img src = {props.image} alt="img-blog"/>
              <p>{props.text}</p>
	    </Link>
          </div>
	
    }
}