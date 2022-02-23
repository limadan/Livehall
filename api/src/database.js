var streams = [
    {
        idConteudo:1, 
        idStreamer:1,
        descricao:"Live de CS:GO",
        link:"https://twitch.com",
        categoria:"CS:GO"
    },
    {
        idConteudo:2, 
        idStreamer:2,
        descricao:"Live de League Of Legends",
        link:"https://twitch.com",
        categoria:"League of Legends"
    },
    {
        idConteudo:3, 
        idStreamer:3,
        descricao:"Live de Minecraft",
        link:"https://twitch.com",
        categoria:"Minecraft"
    },
    {
        idConteudo:4, 
        idStreamer:4,
        descricao:"Live de Valorant",
        link:"https://twitch.com",
        categoria:"Valorant"
    },
    {
        idConteudo:5, 
        idStreamer:5,
        descricao:"Live de Dota",
        link:"https://twitch.com",
        categoria:"Dota",
    }
]

const users = [
    {
        idUser: 1,
        nome: "Camila",
        username:"camila_13",
        senha:"1234",
        email:"camila@gmail.com",
        sexo:"Feminino"
    },
    {
        idUser: 2,
        nome: "Isabela",
        username:"isabela_15",
        senha:"1234",
        email:"isabela@gmail.com",
        sexo:"Feminino"
    },
    {
        idUser: 3,
        nome: "Gabriela",
        username:"gabizinha_12",
        senha:"1234",
        email:"gabi@gmail.com",
        sexo:"Feminino"
    },
    {
        idUser: 4,
        nome: "Vanessa",
        username:"vanessa_215",
        senha:"1234",
        email:"vanessa@gmail.com",
        sexo:"Feminino"
    },
    {
        idUser: 5,
        nome: "Ana",
        username:"Ana_gameplays",
        senha:"54321",
        email:"analu@gmail.com",
        sexo:"Feminino"
    }
]

var getUsers = function(){
    return users;
}

var getStreams = function(){
    return streams;
}

module.exports = {getUsers, getStreams};