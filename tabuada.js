let numero = document.getElementById('numero')
let div = document.getElementById('container')

function montarTabuada () {
    div.innerHTML = ''
    if (numero.value) {
        for (i = 1; i <= 10; i++) {
            let p = document.createElement("p")
            div.appendChild(p)
            
            p.innerHTML = `${numero.value} x ${i} = ${numero.value * i}`
        }

    } 
}


function tabuada(event) {
    if (event.keyCode == 13) {
        montarTabuada()
    }
}

