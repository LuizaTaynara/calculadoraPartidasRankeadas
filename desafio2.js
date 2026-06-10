let result = resultRank(120, 19)
let heroi = "Eleven"
let nivel = ""

if (result <= 10) {
    nivel = "Ferro"
} else if (result <= 20) {
    nivel = "Bronze"
} else if (result <= 50) {
    nivel = "Prata"
} else if (result <= 80) {
    nivel = "Ouro"
} else if (result <= 90) {
    nivel = "Diamante"
} else if (result <= 100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log(`O Herói ${heroi} tem o saldo de ${result} vitórias e está no nível ${nivel}`)

function resultRank(vitorias, derrotas) {
    let sumTotal = vitorias - derrotas
    return sumTotal
}
