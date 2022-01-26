import React from 'react'
import BarraNav from '../components/BarraNav.jsx'
import '../styles/config-conta.css'

import imgPerfil from '../imgs/imgPerfil.png'

import Maria from '../imgs/users/maria.png'
import Camila from '../imgs/users/Camila.png'
import Barbara from '../imgs/users/Barbara.png'

export default function ConfigConta(){
	return <React.Fragment>
		<BarraNav/>
		<div className="config-conta">
		  <header>
		    <img src={imgPerfil}/>
		    <h2>Annie</h2>
		  </header>
		  <div className="blocked-users">
			<h3>Usuários bloqueados</h3>
			<a href="">
			   <img src={Maria}/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src={Camila}/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src={Barbara}/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
		  </div>
		  <div className="account-information">
			<a>Nome de Usuário: Annie <button>Editar</button></a>
			<a>Celular: (11)94002-8922<button>Editar</button></a>
			<a>Senha: *****<button>Editar</button></a>
			<a>Nome: Annie da Silva <button>Editar</button></a>
			<a>Email: shaolinmatadordeporco@gmail.com<button>Editar</button></a>
		  </div>
		  <div className="privacy-and-safety">
			<div>
			   <h4>Quem pode ver meu perfil</h4>
			   <br/>
			   <h5>Seguidores</h5>
			   <h5>Quem eu sigo</h5>
			   <h5>Todos</h5>
			</div>
			<div>
			   <h4>Quem pode ver minhas postagens</h4>
			   <br/>
			   <h5>Seguidores</h5>
			   <h5>Quem eu sigo</h5>
			   <h5>Todos</h5>
			</div>
			<div>
			   <h4>Quem pode me enviar mensagens</h4>
			   <br/>
			   <h5>Seguidores</h5>
			   <h5>Quem eu sigo</h5>
			   <h5>Todos</h5>
			</div>
		  </div>
		  <footer>
			<button>Desativar conta</button>
			<button>Excuir conta</button>
		  </footer>
		</div>
	</React.Fragment>
}