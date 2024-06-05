var button = document.getElementById('iniciaContador')

button.addEventListener('click', () => {
    var primeiro = document.getElementById('iPrimeiroNum')
    var ultimo = document.getElementById('iUltimoNum')
    var passo = document.getElementById('iPularNum')
    var res = document.getElementById('resultado')

    if (primeiro.value.lenght == 0 || ultimo.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Nenhum campo pode ficar vazio.'
    } else {
        res.innerHTML = '<p>Contando...</p>'
        var num1 = Number(primeiro.value)
        var num2 = Number(ultimo.value)
        var pular = Number(passo.value)

        if(pular <= 0) {
            res.innerHTML = `Passo inválido. Considerando PASSO 1.`
            pular = 1
        }
   
        if(num1 < num2) {
            for(let c = num1; c <= num2; c += pular) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = num1; c >= num2; c -= pular) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
})