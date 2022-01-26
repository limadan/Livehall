import React from 'react'
import '../styles/barra-perfil.css'

export default function BarraPerfil(){
	return <div id="barra-perfil">
		<header>
			<h3>Annie</h3>
			<img src=""/>
		</header>
		<div>
			<select>
				<option selected>Online</option>
				<option>Ocupado</option>
				<option>Ausente</option>
				<option>Offline</option>
			</select>
			<a href="">Perfil</a>
			<a href="">Divulgar stream</a>
		</div>
		
		<div class="following">
			<h3>Seguindo</h3>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>
			<a href="">
			   <img src=""/>
			   <h4>Online há 25 min</h4>
			   <h6>99 assistindo</h6>
			</a>

		</div>
		<footer>
			<button>Configurações</button>
			<button>Sair</button>
		</footer>
	</div>
}