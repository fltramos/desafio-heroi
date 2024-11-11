let nome = "PACO"
let xp = 999
let nivel = ""
let mensagem = "O herói de nome " + nome + " está no nível "

switch(true){
    case (xp <= 1000):
        console.log("F" + xp)            
        nivel = "FERRO"
        console.log(mensagem + nivel)      
        break

    case (xp < 2001):
        console.log("B" + xp)
        nivel = "BRONZE"
        console.log(mensagem + nivel)      
        break

    case (xp < 5001):
        console.log("P" + xp)
        nivel = "PRATA"
        console.log(mensagem + nivel)      
        break
}