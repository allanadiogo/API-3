export function Semaforo(cor){
    let msg = "";
    if(cor == "verde"){
        msg = "Pode atravessar";
    }

    else if(cor == "vermelho"){
        msg = "Nao atravesse";
    }

  else{
      msg = "Invalido";
  }

  return msg;
}

export function DiaSemana(dia){
    let nome = "";
    
    if(dia == 0){
        nome = "Domingo";
    }

    else if(dia == 2){
        nome = "Segunda-Feira";
    }

    else if(dia == 3){
        nome = "Terça-Feira";
    }
    else if(dia == 4){
        nome = "Quarta-Feira";
    }
    else if(dia == 5){
        nome = "Quinta-Feira";
    }
    else if(dia == 6){
        nome = "Sexta-Feira";
    }
    else if(dia == 7){
        nome = "Sábado";
    }
return nome
  
}

export function Fatorial (n){
    let x = 1;
    for(let cont = n; cont >= 1; cont--){
        x *= cont
    }
    return x
}

export function SequenciaPar (numero){
    let a = [];
    let n = 0
    for(let cont = 0; cont <= numero; cont++){
        a[cont] = n * 2
        n++
    }
    return a
}