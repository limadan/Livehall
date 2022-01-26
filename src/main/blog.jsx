import React from 'react'
import BarraNav from '../components/BarraNav.jsx'
import BlogPost from '../components/blog-post.jsx'

import Elisa from '../imgs/users/Elisa.jpg'
import HiHaters from '../imgs/blog-img.jpg'
import BlogImage from '../imgs/blog.png'
import Elena from '../imgs/Elena.png'

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit massa, scelerisque eu convallis sit amet, elementum in nulla. Vivamus scelerisque nisi ipsum, ut dignissim metus sollicitudin a..."

export default function Blog(){
    return <React.Fragment>
            <BarraNav/>
            <img className="blog-image" src={BlogImage}/>
            <input type="text" placeholder="Pesquisar:"/>
            <BlogPost style = '2' image = {Elena} text={text}/>
            <BlogPost style = '1' image = {HiHaters} text={text}/>
            <BlogPost style = '1' image = {Elisa} text={text}/>
        </React.Fragment>
}