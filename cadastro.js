function confirmacao(){
    const senha = document.querySelector('input[name=password]');
    const confirma = document.querySelector('input[name=confirmpassword]');
    if(confirma.value === senha.value){
        confirma.setCustomValidity('');
    } else{
        confirma.setCustomValidity('Senhas não conferem');
    }
}
