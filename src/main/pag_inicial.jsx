import React from 'react';
import BarraNav from '../components/BarraNav.jsx';
import Stories from '../components/stories.jsx';
import Categorias from '../components/categorias.jsx';
import Recomendacoes from '../components/recomendations.jsx'
import Streams from '../components/streams.jsx';

import Logo from '../imgs/LHLogo.png'
import Inicial from '../imgs/inicial.png'

export default function PaginaInicial(){
    return <React.Fragment>
        <BarraNav image_1 = {Logo} image_2 = {Inicial} visible homepage/>
        <Stories/>
        <Recomendacoes/>
        <Categorias/>
        <Streams/>
    </React.Fragment>
}