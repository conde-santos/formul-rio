function Enviar(){
    let nomeU = document.getElementById('nome').value
    let idadeU = document.getElementById('idade').value
    let generoU = document.getElementById('genero').value
    let numeroU = document.getElementById('numero').value

    let interU = document.querySelector("input[name='interesse']:checked").value

    alert('seu nome é: ' + nomeU + '\n' + 'sua idade é: ' + idadeU + '\n' + 'seu genero é: ' + generoU + '\n' + 'seu numero é: ' + numeroU + '\n' + 'seu interesse é em : ' + interU)

    window.location.href='final.html'
}

function Voltar(){
    window.location.href='form.html'
}