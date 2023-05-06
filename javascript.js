function Vermelho(){
    var body = document.getElementById("cor")
    var pver = document.getElementById("letra")
    var paz = document.getElementById("letraaz")
    var pam = document.getElementById("letraam")
    var pverd = document.getElementById("letrav")
    body.style.background = "#D45D57"
    pver.style.color = "white"
    paz.style.color = "white"
    pam.style.color = "white"
    pverd.style.color = "white"
    
    
}
function Verde(){
    var body = document.getElementById("cor")
    var pver = document.getElementById("letra")
    var paz = document.getElementById("letraaz")
    var pam = document.getElementById("letraam")
    var pverd = document.getElementById("letrav")
    body.style.background = "#70D457"
    pver.style.color = "white"
    paz.style.color = "white"
    pam.style.color = "white"
    pverd.style.color = "white"
}
function Azul(){
    var body = document.getElementById("cor")
    var pver = document.getElementById("letra")
    var paz = document.getElementById("letraaz")
    var pam = document.getElementById("letraam")
    var pverd = document.getElementById("letrav")
    body.style.background = "#4F72BD"
    pver.style.color = "white"
    paz.style.color = "white"
    pam.style.color = "white"
    pverd.style.color = "white"
}
function Amarelo(){
    var body = document.getElementById("cor")
    var pver = document.getElementById("letra")
    var paz = document.getElementById("letraaz")
    var pam = document.getElementById("letraam")
    var pverd = document.getElementById("letrav")
    body.style.background = "#F4F681"
    pver.style.color = "black"
    paz.style.color = "black"
    pam.style.color = "black"
    pverd.style.color = "black"
}
function Ocultar(cont){
    var conteudo = document.getElementById(cont)
    if (conteudo.hasAttribute("hidden")){
        conteudo.removeAttribute("hidden")
    } else {
        conteudo.setAttribute("hidden", "")
        

    }

}