import React from 'react';
import {useRef} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Logo from '../imgs/LHLogo.png';
import '../styles/login-box.css';

export default function Cadastro(){
    const redirect = useHistory()
    const [verifyPassword, setVerifyPassword] = React.useState("hidden")
    const [verifyUser, setVerifyUser] = React.useState("hidden")
    const [users, setUsers] = React.useState([])
    React.useEffect(()=>axios.get('http://localhost:8000/users').then((res)=>{
        const data = res.data;
        setUsers(data.map(user=>user.username))
    }), [])
    
    const addUser = (e)=>{
        e.preventDefault()
        if(users.includes(e.target[1].value)){
            setVerifyUser("visible")
        }else if(e.target[3].value!==e.target[4].value){
            setVerifyPassword("visible")
        }else{
            setVerifyPassword("hidden")
            axios.post('http://localhost:8000/users',{
                nome: e.target[0].value,
                username: e.target[1].value,
                senha: e.target[3].value,
                email: e.target[2].value,
                sexo: e.target[5].value,
            }).then((res)=>{
                redirect.push("/login")
            })
        }
    }

    return <React.Fragment>
            <form onSubmit={addUser} className="login-form" method="POST">
            <img src={Logo}/>
            <div>
                <label for="name">Nome:</label>
                <input name="name" id="name"/>
            </div>
            <div>
                <label for="user">Nome de usuário:</label>
                <input name="username" id="user"/>
            </div>
            <h3 className={verifyUser}>Usuário já cadastrado</h3>
            <div>
                <label for="e-mail">E-mail:</label>
                <input name="email" id="e-mail"/>
            </div>

            <div>
                <label for="password">Senha:</label>
                <input name="senha" type="password" id="password"/>
            </div>

            <div>
                <label name="confirmar" for="password">Confirmar senha:</label>
                <input name="confirmar" type="password" id="password"/>
            </div>
            <h3 className={verifyPassword}>Senhas não coindizem</h3>
            <div>
                <label>Gênero:</label>
                <div className="genero-form">
                        <div>
                            <label htmlFor="M">Masculino</label>
                            <input type="radio" name="genero" id="M" value="M"/>
                        </div>
                        <div>
                            <label htmlFor="M">Feminino</label>
                            <input type="radio" name="genero" id="F" value="F"/>
                        </div>
                        <div>
                            <label htmlFor="O">Outro</label>
                            <input type="radio" name="genero" id="O" value="O"/>
                        </div>
                        <div>
                            <label htmlFor="P">Não informar</label>
                            <input type="radio" name="genero" id="P" value="P"/>
                        </div>
                </div>
            </div>

            <button type="submit">Continuar</button>
            <Link to="/login">
                Já tem cadastro? Faça login
            </Link>
        </form>
        </React.Fragment>
}