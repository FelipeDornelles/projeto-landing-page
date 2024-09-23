var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}


