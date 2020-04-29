let fs = require("fs")
let rita = require("rita")

function fazDisciplina() {
  let disciplinas = fs.readFileSync("../data/nomes_withdot.txt").toString('utf-8')
  let disMark = new rita.RiMarkov(2)
  disMark.loadText(disciplinas)
  let disciplina = disMark.generateSentences(1)
  return disciplina[0].substring(0, disciplina[0].length - 1)
}

function fazEmenta() {
  let ementas = fs.readFileSync("../data/ementas-final1.txt").toString('utf-8')
  let emenMark = new rita.RiMarkov(4)
  emenMark.loadText(ementas)
  let ementa = emenMark.generateSentences(3).join("\n")
  return "Ementa:\n"+ ementa
}

console.log(fazDisciplina())
console.log(fazEmenta())
