function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `hora atual ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = "#8CEAEB"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = "#EBE6A3"

    } else {
        img.src = 'noite.png'
        document.body.style.background = "#0023EB"
    }
}