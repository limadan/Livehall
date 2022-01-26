import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import PaginaInicial from './main/pag_inicial.jsx';
import PaginaPerfil from './main/perfil.jsx';
import Comunidade from './main/comunidade.jsx';
import ConfigConta from './main/config_conta.jsx'
import EscreverPost from './main/escrever_post';
import PaginaComentarios from './main/comentarios.jsx';
import Blog from './main/blog.jsx';
import BlogPage from './main/blog-page.jsx';

export default function Routes(){
      return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PaginaInicial}/>
                <Route path="/perfil" component={PaginaPerfil}/>
                <Route path="/comunidade" component={Comunidade}/>
		        <Route path="/escrever-post" component={EscreverPost}/>
		        <Route path="/comentarios" component={PaginaComentarios}/>
		        <Route path="/config-conta" component={ConfigConta}/>
                <Route path="/blog" component={Blog}/>
   		        <Route path="/blog-page" component={BlogPage}/>
            </Switch>
        </BrowserRouter>
    )
}