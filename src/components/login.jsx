import React from 'react'
import {useHistory} from 'react-router-dom'
import {useRef} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Logo from '../imgs/LHLogo.png'
import '../styles/login-box.css';

export default function Login(){
    const redirect = useHistory()
    const [authFail, setAuthFail] = React.useState('hidden');
    const getUserData = (e)=>{
        e.preventDefault()
        axios.get('http://localhost:8000/users/'+e.target[0].value).then((res)=>{
            const data = res.data
            if(e.target[1].value===data.senha){
                console.log(user)
                console.log("Login feito com sucesso.")
                auth.id = data.idUser
                auth.nome = data.nome
                auth.username= data.username
                auth.sexo= data.sexo
                auth.isLogged= true
                console.log(user)
                //redirect.push("/")
            }else{
                setAuthFail('visible')
            }
        })
    }
    
    return(
        <React.Fragment>
        <form onSubmit={getUserData} className="login-form" method="POST">
        <img src={Logo}/>
        <h2>Faça Login</h2>

        <div>
            <label htmlFor="user">Nome de usuário</label>
            <input name="username" id="user"/>
        </div>
        <div>
            <label htmlFor="password">Senha:</label>
            <input name="senha" id="password"/>
        </div>
        <h3 className={authFail}>Usuário e senha inválidos</h3>
        <button type="submit">ENTRAR</button>
        <span>Não tem login? <Link to="/cadastro">
                                Cadastre-se aqui
                             </Link>
        </span>
        <h4>OU</h4>
        <Link to="/">
            Use o Livehall sem login
        </Link>
    </form>
    </React.Fragment>)
}