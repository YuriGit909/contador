var button = document.getElementById('iniciaContador')

button.addEventListener('click', () => {
    var primeiro = document.getElementById('iPrimeiroNum')
    var ultimo = document.getElementById('iUltimoNum')
    var passo = document.getElementById('iPularNum')
    var res = document.getElementById('resultado')

    var num1 = Number(primeiro.value)
    var num2 = Number(ultimo.value)
    var pular = Number(passo.value)

    if (num1 == '' && num2 == '' && pular == '') {
        window.alert('Nenhum campo pode ficar vazio.')
    } else {
        for(var calc = num1 + pular; calc <= num2; calc++) {
            res.innerHTML = `${calc}`
        }
    }
})