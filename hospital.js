class Fila {
  constructor() {
    this.itens = [];
  }
  

 // Adiciona um elemento da fila
  enfileirar(elemento) {
    this.itens.push(elemento);
  }
  
  // Remove o próximo da fila
  desenfileirar() {
    return this.itens.shift();
  }
  
  // Mostra quem é o próximo da fila
  frente() {
    return this.itens[0];
  }
  
  // Mostra a fila toda
  imprimir() {
    return this.itens;
  }
}

class Pilha {
  constructor() {
    this.itens = [];
  }
  
  // Adiciona um item na pilha
  empilhar(elemento) {
    this.itens.push(elemento);
  }
  
  // Tira o último item a ser empilhado da pilha
  desempilhar() {
    return this.itens.pop();
  }
  
  // Apresenta a pilha toda
  imprimir() {
    return this.itens;
  }
  
  // Função extra: buscar prontuário
  buscar(nome) {
    return this.itens.includes(nome) ? 
      `Prontuário de ${nome} encontrado` : 
      `Prontuário de ${nome} não encontrado`;
  }
}

// Função principal
function executarHospital() {
  // Criando as estruturas (Fila e Pilha)
  const fila = new Fila();
  const pilha = new Pilha();
  
  // Adicionando 5 pacientes na fila
  console.log("Adicionando pacientes à fila:");
  const pacientes = ["Caixa Dagua", "Yan", "Felipe", "Cabral", "Christian"];
  pacientes.forEach(p => {
    fila.enfileirar(p);
    console.log(`- ${p} entrou na fila`);
  });
  
  // Mostrar o próximo a ser atendido
  console.log(`\nPróximo paciente: ${fila.frente()}`);
  
  // Atender dois pacientes e empilhar os prontuários 
  console.log("\nRealizando atendimentos:");
  for (let i = 0; i < 2; i++) {
    const paciente = fila.desenfileirar();
    console.log(`- Atendendo: ${paciente}`);
    pilha.empilhar(paciente);
  }
  
  // Apresentar resultados finais
  console.log("\nResultados finais:");
  console.log("Fila restante:", fila.imprimir());
  console.log("Pilha de prontuários:", pilha.imprimir());
  
  // Extra: buscar prontuário
  console.log("\nBuscando prontuário:", pilha.buscar("Caixa Dagua"));
}

// Executa toda a simulação em uma só função
executarHospital();
