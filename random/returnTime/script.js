 function load(){
    let msg = document.getElementById('msg')
    let img = document.querySelector('#imagem')
    
    //Getting the actual hour
    let date = new Date()
    let hora = date.getHours()

    //Rendering the hour
    msg.innerHTML = `agora são ${hora}h`

    //condition
    if ( hora >= 0 && hora < 12) {
        img.src='./images/morning.jpg'
        msg.innerHTML = `agora são ${hora}h da manhã`

    } else if (hora >= 12 && hora < 18) {
        img.src='./images/afternoon.jpg'
        msg.innerHTML = `agora são ${hora}h da tarde`

    } else {
        img.src='./images/night.jpg'
        msg.innerHTML = `agora são ${hora}h da noite`

    }
 }
 

