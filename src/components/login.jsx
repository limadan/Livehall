import React from 'react'
import '../styles/login-box.css';

export default function Login(){
    return <form class="login-box">
        <h2>Faça Login</h2>

        <div>
            <label for="user">Nome de usuário</label>
            <input id="user"/>
        </div>
        <div>
            <label for="password">Senha:</label>
            <input id="password"/>
        </div>

        <button type="submit">ENTRAR</button>
        <span>Não tem login? <a>Cadastre-se aqui</a></span>
    </form>
}