let nomeDoHeroi = "PACO"
let xp = 5000
let nivel = ""

switch(true){   
    case (xp < 1001):                    
        nivel = "FERRO"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 2001):        
        nivel = "BRONZE"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 5001):
        nivel = "PRATA"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 7001):        
        nivel = "OURO"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 8001):        
        nivel = "PLATINA"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 9001):        
        nivel = "ASCENDENTE"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp < 10001):        
        nivel = "IMORTAL"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break
    case (xp > 10000):        
        nivel = "RADIANTE"
        console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivel}`)      
        break

    default:
        console.log(`O Herói de nome ${nomeDoHeroi} está sem XP`)
}