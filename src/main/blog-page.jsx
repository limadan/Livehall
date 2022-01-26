import React from 'react'
import BarraNav from '../components/BarraNav.jsx';
import Comment from '../components/comment.jsx'

import Maria from '../imgs/users/maria.png'
import Mia from '../imgs/users/Mia.png'
import image from '../imgs/blog-img-3.png'
import imgPerfil from '../imgs/imgPerfil.png'
import BlogIllustration from '../imgs/blog-img.jpg'

import '../styles/blog-page.css'



export default function BlogPage(props){
    return <React.Fragment>
     <BarraNav/>
     <h1>{props.title}</h1>
     <img  src = {BlogIllustration} alt="blog-illustration"/>
     <header className="blog-header">
      <img src = {imgPerfil} alt="user"/>
      <div>
        <h6>Escrito por</h6>
        <h3>{props.user}</h3>
      </div>
     </header>
     <section>
       <h2>Subtitulo</h2>
       <img src = {image} alt="image"/>
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
         velit massa, scelerisque eu convallis sit amet, elementum in nulla.
         Vivamus scelerisque nisi ipsum, ut dignissim metus sollicitudin
         a...</p>


       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
         doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
         veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
         ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

       <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
         adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
         dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
         exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
         commodiuatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
         esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
         voluptas nulla pariatur?</p>
     </section>
     <footer>
       <Comment image = {Maria} user = "Maria"/>
       <Comment image = {Mia} user = "Mia"/>
     </footer>
    </React.Fragment>
}