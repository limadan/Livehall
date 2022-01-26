import React from 'react'
import Comment from './comment'
import Post from './post'
import '../styles/comments.css'

import Maria from '../imgs/users/maria.png'
import Mia from '../imgs/users/Mia.png'
import Isabela from '../imgs/users/isabela.png'

export default function CommentBox(){
    return <div className="comments">
        <br/>
        <Post profileImage = {Isabela} user = "Isabela"/>
        <br/>
        <div>
            <Comment image = {Maria} user="Maria"/>
            <Comment image = {Mia} user = "Mia"/>
        </div>
    </div>
}