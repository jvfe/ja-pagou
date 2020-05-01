const fs = require("fs")
const rita = require("rita")

function fazDisciplina() {
  const disciplinas = fs.readFileSync("../data/nomes_withdot.txt").toString('utf-8')
  const disMark = new rita.RiMarkov(2)
  disMark.loadText(disciplinas)
  let disciplina = disMark.generateSentence()
  return disciplina.substring(0, disciplina.length - 1)
}

function fazEmenta() {
  const ementas = fs.readFileSync("../data/ementas-final1.txt").toString('utf-8')
  const emenMark = new rita.RiMarkov(3)
  emenMark.loadText(ementas)
  let ementa = emenMark.generateSentences(3)
  return ementa
}

function formata(){
  const disciplina = fazDisciplina()
  let unidades = fazEmenta()
  unidades = unidades.map(unidade => '\t'+unidade+'\n').join('')
  let completo = disciplina +'\n'+ 'Ementa:\n' + unidades
  if (completo.length > 280){
   completo = formata()
  }
  return completo
}

module.exports = { formata: formata }

// console.log(formata())
