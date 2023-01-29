// Variaveis
const elementoResposta = document.querySelector("#resposta")

const inputPergunta = document.querySelector("#inputPergunta")

const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

const perguntasProibidas = [
    "traiu",
    "trai",
    "traiçao",
    "traicoes",
    "trair",
    "trairia",
    "nao me ama",
    "nao me ama mais",
    "mente"
]

// clicar em fazer pergunta
function fazerPergunta() {

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    if (!inputPergunta.value.includes("meu namorado")) {
        alert("Pergunte sobre o namorado")
        return
    }

    if (perguntasProibidas.some(perguntaProibida => inputPergunta.value.includes(perguntaProibida))) {
        alert("Pergunta proibida")
        return
    }

    if(inputPergunta.value.includes("me ama")) {
        elementoResposta.innerHTML = "Você é a única garota que ele ama!"
        return
    }

    if(inputPergunta.value.includes("e apaixonado por mim")) {
        elementoResposta.innerHTML = "Ele é apaixonado por você!"
        return
    }
    
    if (inputPergunta.value.includes("e o melhor")) {
        elementoResposta.innerHTML = "Ele é o melhor namorado do mundo!"
        return
    }

    if(inputPergunta.value.includes("e o mais bonito")) {
        elementoResposta.innerHTML = "certamento não é o mais bonito!"
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aletorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    // sumir a resposta depois de 3 segundos
    setTimeout(function () {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}
