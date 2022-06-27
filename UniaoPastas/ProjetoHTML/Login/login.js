function validar(){
    var nome = document.forms ["cadastro"] ["nome"];
    var mensagem = document.getElementById("mensagem");
    var senha = document.forms ["cadastro"] ["senha"];
    var erro = 0;
    if(nome.value==""){
      nome.classList.add("erro");
      mensagem.innerHTML  += "preencha o nome";
      erro = 1 ;
    }else {
      nome.classList.remove("erro");
      nome.classList.add("sucesso");
    }
    if (senha.value.length < 5) { 
       mensagem.innerHTML += "A senha precisa ter pelo menos 6 (seis) caracteres.";
        erro = 2 ;
  }else{
      nome.classList.remove("erro");
      nome.classList.add("sucesso");
     }
    if(erro == 0){
      return true;
    }else{
      return false;
    }
  }