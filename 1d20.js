function rolarDado() {
  return Math.floor(Math.random() * 20) + 1;
}

let resultado = rolarDado();
console.log("Voce rolou o dado e tirou:", resultado);