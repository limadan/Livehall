import React from 'react';
import BarraNav from '../components/BarraNav.jsx';
import PostBox from '../components/post-box'

import ComunidadeImagem from '../imgs/comunidade.png'
import ComunidadeTitulo from '../imgs/comunidade(2).png'


export default function Comunidade(){
    return <React.Fragment>
        <BarraNav image_1 = {ComunidadeTitulo} image_2 = {ComunidadeImagem} visible/>
        <PostBox/>
    </React.Fragment>
}