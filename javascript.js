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
function FontPret(){
    var pfont = document.getElementById("conteudo") 
    pfont.style.color = "white"
}
function FontBranc(){
    var pfont = document.getElementById("conteudo") 
    pfont.style.color = "black"
}
function BackBlack(){
    var body = document.getElementById("back") 
    body.style.background = "black"
}
function BackWhite(){
    var body = document.getElementById("back") 
    body.style.background = "white"
}
var aumento = 10
var diminuir = 10
var fontSize = 100

function AumentaTam(){
    var pfont = document.getElementById("conteudo")
    fontSize = fontSize + aumento
    pfont.style.fontSize = fontSize + "%"
}
function DiminuiTam(){
    var pfont = document.getElementById("conteudo")
    fontSize = fontSize - diminuir
    pfont.style.fontSize = fontSize + "%"
}
function Maiuscula(){
    var pfont = document.getElementById("conteudo")
    pfont.style.textTransform = "uppercase"
}
function Minuscula(){
    var pfont = document.getElementById("conteudo")
    pfont.style.textTransform = "lowercase"
}
function ValidSenhaComp(){
    var senha = document.getElementById("senha").value
    var senhaconf = document.getElementById("senhaconf").value
    if (senha != senhaconf){
        alert("As senhas não coincidem!")
        return false
    }
    return true
}
function ValidCampos(){
    var senha = document.getElementById("senha").value
    var senhaconf = document.getElementById("senhaconf").value
    var login = document.getElementById("login").value

    if(senha == "" || senhaconf == "" || login == ""){
        alert("Preencha todos os campos")
        return false
    }
    return true
}
function ValidTamanhoSenha(){
    var senha = document.getElementById("senha").value
    if (senha.length < 6 || senha.length > 10 ){
        alert("Digite uma senha entre 6 a 10 caracteres")
    }
}
function ValidarSenha(){
    var senha = document.getElementById("senha").value
    var senhaconf = document.getElementById("senhaconf").value
    var login = document.getElementById("login").value

    if (senha.length < 6 || senha.length > 10 ){
        alert("Digite uma senha entre 6 a 10 caracteres")
    } else if(senha == "" || senhaconf == "" || login == ""){
        alert("Preencha todos os campos")
    } else if(senha == "" || senhaconf == "" || login == ""){
        alert("Preencha todos os campos")
    } else if (senha != senhaconf){
        alert("As senhas não coincidem!")
    } else {
        alert("Cadastro realizado com sucesso")
    }
}
function HabilitaBotao(){
    var select1 = document.getElementById("select1").checked
    var select2 = document.getElementById("select2").checked
    var botao = document.getElementById("botao-select")

    if (select1 && select2) {
        botao.removeAttribute("disabled");
      } else {
        botao.setAttribute("disabled", "true");
      }
}
function Formulario(){
    var fisica = document.getElementById("fisica").checked
    var juridica = document.getElementById("juridica").checked
    var cpf = document.getElementById("cpf")
    var nascimento = document.getElementById("nascimento")
    var cnpj = document.getElementById("cnpj")

    if ( fisica) {
        cpf.removeAttribute("disabled")
        nascimento.removeAttribute("disabled")
        cnpj.setAttribute("disabled", "true")
    } else if (juridica){
        cpf.setAttribute("disabled", "true")
        nascimento.setAttribute("disabled", "true")
        cnpj.removeAttribute("disabled")
    }
}