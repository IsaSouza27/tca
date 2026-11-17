
class personagem {
    constructor (nome, tom_de_pele, Corte_do_cabelo,cor_do_cabelo, acessorio, genero, id) {
    this.nome = nome;
    this.tom_de_pele = tom_de_pele;
    this.Corte_do_cabelo = Corte_do_cabelo;
    this.cor_do_cabelo = cor_do_cabelo;
    this.acessorio = acessorio;
    this.genero = genero;
    this.id= id;
    }
}

Lucy = new personagem ('Lucy','oliva', 'curto', 'castanho', 'enfeite de cabeça', 'feminino', 0)
Sara = new personagem ('Sara','clara', 'longo', 'castanho', 'oculos', 'feminino', 1)
Emma = new personagem ('Emma','escura', 'longo', 'cinza', 'nenhum', 'feminino', 2)
Henry = new personagem ('Henry','escura', 'curto', 'castanho', 'nenhum', 'masculino', 3)
Rose = new personagem ('Rose','clara', 'curto', 'preto', 'enfeite de cabeça', 'feminino', 4)
Jeff = new personagem ('Jeff','clara', 'longo', 'loiro', 'oculos', 'masculino', 5)
Lia = new personagem ('Lia','oliva', 'longo', 'cinza', 'joias', 'feminino', 6)
Rob = new personagem ('Rob','oliva', 'curto', 'preto', 'enfeite de cabeça', 'masculino', 7)
Aria = new personagem ('Aria','clara', 'curto', 'cinza', 'oculos', 'feminino', 8)
Bob = new personagem ('Bob','escura', 'curto', 'castanho', 'nenhum', 'masculino', 9)
Bella = new personagem ('Bella','clara', 'curto', 'ruivo', 'nenhum', 'feminino', 10)
Sophia = new personagem ('Sophia','oliva', 'curto', 'loiro', 'joias', 'feminino', 11)
Jack = new personagem ('Jack','clara', 'curto', 'cinza', 'enfeite de cabeça', 'masculino', 12)
Jose = new personagem ('Jose','escura', 'careca', 'nenhum', 'nenhum', 'masculino', 13)
Theo = new personagem ('Theo','oliva', 'curto', 'loiro', 'nenhum', 'masculino', 14)
Annie = new personagem ('Annie','clara', 'longo', 'ruivo', 'joias', 'feminino', 15)
Paul = new personagem ('Paul','oliva', 'longo', 'ruivo', 'nenhum', 'masculino', 16)
Olivia = new personagem ('Olivia','escura', 'longo', 'loiro', 'joias', 'feminino', 17)
Chloe = new personagem ('Chloe','oliva', 'longo', 'castanho', 'joias', 'feminino', 18)
Nora = new personagem ('Nora','escura', 'curto', 'ruivo', 'oculos', 'feminino', 19)
James = new personagem ('James','clara', 'curto', 'ruivo', 'oculos', 'masculino', 20)
Naomi = new personagem ('Naomi','clara', 'longo', 'preto', 'joias', 'feminino', 21)
Mila = new personagem ('Mila','escura', 'longo', 'loiro', 'oculos', 'feminino', 22)
David = new personagem ('David','escura', 'longo', 'preto', 'nenhum', 'masculino', 23)

let personagens1=[Lucy, Sara, Emma, Henry, Rose, Jeff, Lia, Rob , Aria, Bob, Bella, Sophia, Jack, Jose, Theo, Annie, Paul, Olivia, Chloe, Nora, James, Naomi, Mila, David]
let personagens2=[Lucy, Sara, Emma, Henry, Rose, Jeff, Lia, Rob , Aria, Bob, Bella, Sophia, Jack, Jose, Theo, Annie, Paul, Olivia, Chloe, Nora, James, Naomi, Mila, David]


Jogador_1 = prompt("Jogador 1 escolha seu personagem para ser alvo do jogador 2:Lucy, Sara, Emma, Henry, Rose, Jeff, Lia, Rob , Aria, Bob, Bella, Sophia, Jack, Jose, Theo, Annie, Paul, Olivia, Chloe, Nora, James, Naomi, Mila, David")
Jogador_2 = prompt("Jogador 2 escolha seu personagem para ser alvo do jogador 1:Lucy, Sara, Emma, Henry, Rose, Jeff, Lia, Rob , Aria, Bob, Bella, Sophia, Jack, Jose, Theo, Annie, Paul, Olivia, Chloe, Nora, James, Naomi, Mila, David")


let num1 = 0;
let num2 = 0;
for(let i=0; i < personagens1.length; i++){
    if(personagens1[i].nome.toLowerCase() == Jogador_1.toLowerCase()){
        num1 = i
    }
}
for(let i=0; i < personagens2.length; i++){
    if(personagens2[i].nome.toLowerCase() == Jogador_2.toLowerCase()){
        num2 = i
    }
}

JOGADOR1 = personagens1[num1]
JOGADOR2 = personagens2[num2]

    num=1;

    while ( (personagens1.length!=1) && (personagens2.length!=1)){

        if (num%2 == 1){
            alert("É sua vez jogador 1!!")
            oqfazer= prompt("O que você deseja fazer? Digite 1 para fazer uma pergunta, 2 para tentar adivinhar o personagem ou 3 para sair do jogo")

            if(oqfazer==2){
                alert("Você deseja adivinhar qual é seu personagem alvo")
                chute= prompt("Digite qual persoangem você acha que é seu alvo:")
                if(chute==JOGADOR2.nome){
                    alert("Jogador 1 acertou seu personagem alvo!! Parabéns, você ganhou o jogo!!!")
                    break
                }
                else{
                    alert("Você errou o personagem! Jogador 2 venceu!!!")
                    break
                }
            }

            if(oqfazer==3){
                alert("Você deseja sair do jogo!")
                break
            }

            if(oqfazer==1){
            oq_deseja_perguntar = prompt('Qual categoria voce deseja perguntar? 1. tom de pele, 2. corte de cabelo, 3. cor do cabelo, 4. acessorio, 5. genero' )

            if(oq_deseja_perguntar==1){
                tom= prompt("Você quer saber se o tom de pele é: escura, clara ou oliva?")
        
                if(tom==JOGADOR2.tom_de_pele){
                    alert("O alvo possui o tom de pele "+ JOGADOR2.tom_de_pele)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].tom_de_pele != tom){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
                else{
                    alert("O alvo não possui o tom de pele "+ tom)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].tom_de_pele == tom){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
            }
        
            if(oq_deseja_perguntar==2){
                corte= prompt("Você quer saber se o corte de cabelo é: longo, curto ou careca")
        
                if(corte==JOGADOR2.Corte_do_cabelo){
                    alert("O alvo possui o corte de cabelo "+ JOGADOR2.Corte_do_cabelo)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].Corte_do_cabelo != corte){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
                else{
                    alert("O alvo não possui o corte de cabelo "+ corte)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].Corte_do_cabelo == corte){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
            }
        
            if(oq_deseja_perguntar==3){
                cor= prompt("Você quer saber se a cor do cabelo é: ruivo, castanho, loiro, preto ou cinza?")
        
                if(cor==JOGADOR2.cor_do_cabelo){
                    alert("O alvo possui a cor de cabelo "+ JOGADOR2.cor_do_cabelo)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].cor_do_cabelo != cor){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
                else{
                    alert("O alvo não possui a cor de cabelo "+ cor)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].cor_do_cabelo == cor){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
            }
        
            if(oq_deseja_perguntar==4){
                acess= prompt("Você quer saber se o alvo esta usando: enfeite de cabeça, oculos, joias ou nenhum?")
        
                if(acess==JOGADOR2.acessorio){
                    alert("O alvo esta usando "+ JOGADOR2.acessorio)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].acessorio != acess){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
                else{
                    alert("O alvo não está usando "+ acess)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].acessorio == acess){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
            }
        
            if(oq_deseja_perguntar==5){
                gen= prompt("Você quer saber se o alvo é: feminino ou masculino?")
        
                if(gen==JOGADOR2.genero){
                    alert("O alvo é "+ JOGADOR2.genero)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].genero != gen){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
                else{
                    alert("O alvo não é "+ gen)
                    let index = []
                    for(let i=0; i < personagens1.length; i++){
                        if(personagens1[i].genero == gen){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens1.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
                }
            }
        
         num++
        }
        console.log(".")
        console.log(".")
        console.log(".")
         console.log("Lista dos personagens restantes do jogador 2:")
         for(let i=0; i < personagens2.length; i++){
            console.log('nome:'+personagens2[i].nome + '  '+ "tom de pele:" + personagens2[i].tom_de_pele+ '   '+ 'Corte do cabelo:'+personagens2[i].Corte_do_cabelo+ '   '+'Cor do cabelo:' + personagens2[i].cor_do_cabelo+ '   '+ 'Acessorio:'+ personagens2[i].acessorio + '   '+ 'gênero:'+ personagens2[i].genero )
         }
         
    }


         
        
        
    
    if(personagens1.length==1){
        alert("Jogador 1 ganhou!! Seu personagem alvo era " + JOGADOR2.nome)
        break
    }

    if (num%2 == 0){
        alert("É sua vez jogador 2!!")
         oqfazer= prompt("O que você deseja fazer? Digite 1 para fazer uma pergunta, 2 para tentar adivinhar o personagem ou 3 para sair do jogo")

            if(oqfazer==2){
                alert("Você deseja chutar qual é seu personagem alvo")
                chute= prompt("Digite qual persoangem você acha que é seu alvo:")

                if(chute==JOGADOR1.nome){
                    alert("Jogador 2 acertou seu personagem alvo!! Parabéns, você ganhou o jogo!!!")
                    break
                }
                else{
                    alert("Você errou o personagem! Jogador 1 venceu!!!")
                    break
                }
            }

            if(oqfazer==3){
                alert("Você deseja sair do jogo!")
                break
            }

            if(oqfazer==1){
        oq_deseja_perguntar = prompt('Qual categoria voce deseja perguntar? 1. tom de pele, 2. corte de cabelo, 3. cor do cabelo, 4. acessorio, 5. genero' )

    if(oq_deseja_perguntar==1){
        tom= prompt("Você quer saber se o tom de pele é: escura, clara ou oliva?")

        if(tom==JOGADOR1.tom_de_pele){
            alert("O alvo possui o tom de pele "+ JOGADOR1.tom_de_pele)
            let index = []
            for(let i=0; i < personagens2.length; i++){
                if(personagens2[i].tom_de_pele != tom){
                    index.push(i)
                }
            }
            while(index.length >0){
                personagens2.splice(index.pop(),1)

                // personagem.splice(indice que quero remover, quantidade)
            }
        }
        else{
            alert("O alvo não possui o tom de pele "+ tom)
            let index = []
                    for(let i=0; i < personagens2.length; i++){
                        if(personagens2[i].tom_de_pele == tom){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens2.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
        }
    }

    if(oq_deseja_perguntar==2){
        corte= prompt("Você quer saber se o corte de cabelo é: longo, curto ou careca")

        if(corte==JOGADOR1.Corte_do_cabelo){
            alert("O alvo possui o corte de cabelo "+ JOGADOR1.Corte_do_cabelo)
            let index = []
            for(let i=0; i < personagens2.length; i++){
                if(personagens2[i].Corte_do_cabelo != corte){
                    index.push(i)
                }
            }
            while(index.length >0){
                personagens2.splice(index.pop(),1)

                // personagem.splice(indice que quero remover, quantidade)
            }
        }
        else{
            alert("O alvo não possui o corte de cabelo "+ corte)
            let index = []
                    for(let i=0; i < personagens2.length; i++){
                        if(personagens2[i].Corte_do_cabelo == corte){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens2.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
        }
    }

    if(oq_deseja_perguntar==3){
        cor= prompt("Você quer saber se a cor do cabelo é: ruivo, castanho, loiro, preto ou cinza?")

        if(cor==JOGADOR1.cor_do_cabelo){
            alert("O alvo possui a cor de cabelo "+ JOGADOR1.cor_do_cabelo)
            let index = []
            for(let i=0; i < personagens2.length; i++){
                if(personagens2[i].cor_do_cabelo != cor){
                    index.push(i)
                }
            }
            while(index.length >0){
                personagens2.splice(index.pop(),1)

                // personagem.splice(indice que quero remover, quantidade)
            }
        }
        else{
            alert("O alvo não possui a cor de cabelo "+ cor)
            let index = []
                    for(let i=0; i < personagens2.length; i++){
                        if(personagens2[i].cor_do_cabelo == cor){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens2.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
        }
    }

    if(oq_deseja_perguntar==4){
        acess= prompt("Você quer saber se o alvo esta usando: enfeite de cabeça, oculos, joias ou nenhum?")

        if(acess==JOGADOR1.acessorio){
            alert("O alvo esta usando "+ JOGADOR1.acessorio)
            let index = []
            for(let i=0; i < personagens2.length; i++){
                if(personagens2[i].acessorio != acess){
                    index.push(i)
                }
            }
            while(index.length >0){
                personagens2.splice(index.pop(),1)

                // personagem.splice(indice que quero remover, quantidade)
            }
        }
        else{
            alert("O alvo não está usando "+ acess)
            let index = []
                    for(let i=0; i < personagens2.length; i++){
                        if(personagens2[i].acessorio == acess){
                            index.push(i)
                        }
                    }
                    while(index.length >0){
                        personagens2.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
        }
    }

    if(oq_deseja_perguntar==5){
        gen= prompt("Você quer saber se o alvo é: feminino ou masculino?")

        if(gen==JOGADOR1.genero){
            alert("O alvo é "+ JOGADOR1.genero)
            let index = []
            for(let i=0; i < personagens2.length; i++){
                if(personagens2[i].genero != gen){
                    index.push(i)
                }
            }
            while(index.length >0){
                personagens2.splice(index.pop(),1)

                // personagem.splice(indice que quero remover, quantidade)
            }
        }
        else{
            alert("O alvo não é "+ gen)
            let index = []
                    for(let i=0; i < personagens2.length; i++){
                        if(personagens2[i].genero== gen){
                            index.push(i)
                    }
                }
                    while(index.length >0){
                        personagens2.splice(index.pop(),1)
        
                        // personagem.splice(indice que quero remover, quantidade)
                    }
        }
    
}
    num++
}
     console.log(".")
    console.log(".")
    console.log(".")
    console.log("Lista restante dos personagens do jogador 1:")
for(let i=0; i < personagens1.length; i++){
    console.log('nome:'+personagens1[i].nome + '   '+ "tom de pele:" + personagens1[i].tom_de_pele+ '   '+ 'Corte do cabelo:'+personagens1[i].Corte_do_cabelo+ '   '+'Cor do cabelo:' + personagens1[i].cor_do_cabelo+ '   '+ 'Acessorio:'+ personagens1[i].acessorio + '   '+ 'gênero:'+ personagens1[i].genero )
 }
    }
    if(personagens2.length==1){
        alert("Jogador 2 ganhou!! Seu personagem alvo era " + JOGADOR1.nome)
    }
}




