const p = document.getElementsByName("p")[0]
const b = document.getElementsByClassName("b1")
const b2 = document.getElementById("b2")
const i = document.querySelector('img')

function modificarParagrafo(){
    p.style.color = "red"
    p.style.fontFamily = "Arial Black"
    p.style.fontSize = "25pt"
    p.style.border = "1px solid green"
}

function mudarImagem(){
    i.src = "./img/lua.jpg"
    i.style.width = "180px"
    i.style.height = "110px"
    i.style.borderRadius = "50px"
}