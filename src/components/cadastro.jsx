import React from 'react'
import '../styles/login-box.css';

export default function Login(){
    return <div class="login-box">
        <form>
            <div>
                <label for="user">Nome de usuário:</label>
                <input id="user"/>
            </div>

            <div>
                <label for="e-mail">E-mail:</label>
                <input id="e-mail"/>
            </div>

            <div>
                <label for="password">Senha:</label>
                <input id="password"/>
            </div>

            <div>
                <label for="password">Confirmar senha:</label>
                <input id="password"/>
            </div>

            <button type="submit">Continuar</button>
        </form>
    </div>
}