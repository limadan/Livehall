import React from 'react';
import BarraNav from '../components/BarraNav.jsx'
import Perfil from '../components/profile.jsx';
import Streams from '../components/streams.jsx';
import Categorias from '../components/categorias.jsx';


export default function PaginaPerfil(){
    return <React.Fragment>
        <BarraNav/>
        <Perfil/>
        <Streams/>
        <Categorias/>
    </React.Fragment>
}