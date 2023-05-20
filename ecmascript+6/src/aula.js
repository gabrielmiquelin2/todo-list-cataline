// // // class Person{
// // //    sayHello(){
// // //     console.log("Salve")
// // //    }
// // // }

// // // const number  = [1,2,3,4,]

// // // const [pri,ter, ...res] = number
// // // console.log(pri)

// ///////////////////////////////////////////////////////////////


// //CLASSES
// // function modeloCar (preco, marca){
// //   this.preco = preco;
// //   this.marca = marca;
// // }

// // let bmw = new modeloCar ("m7", 90)
// // let civic = new modeloCar("hrv", 230)
// // console.log(bmw)
// // console.log(civic)


// // //Métodos GET e SET
// // class Pessoa {
// //   constructor(nome) {
// //     this._nome = nome;
// //   }

// //   get nome() {
// //     return this._nome;
// //   }

// //   set nome(novoNome) {
// //     this._nome = novoNome;
// //   }
// // }

// // // Criando uma instância da classe Pessoa
// // const pessoa = new Pessoa('João');

// // // Obtendo o valor da propriedade nome
// // console.log(pessoa.nome); // Saída: João

// // // Definindo um novo valor para a propriedade nome
// // pessoa.nome = 'Maria';

// // // Obtendo o novo valor da propriedade nome
// // console.log(pessoa.nome); // Saída: Maria


// //Métodos estáticos em classes JavaScript
// class Utilitarios {
//   static somar(a, b) {
//     return a + b;
//   }

//   static multiplicar(a, b) {
//     return a * b;
//   }
// }

// // Chamando o método estático somar
// console.log(Utilitarios.somar(5, 3)); // Saída: 8

// // Chamando o método estático multiplicar
// console.log(Utilitarios.multiplicar(4, 2)); // Saída: 8


// //HERANÇA
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log('Barulho genérico do animal');
//   }
// }
// class Cachorro extends Animal {
//   fazerBarulho() {
//     console.log('Au au!');
//   }

//   abanarRabo() {
//     console.log('Abanando o rabo');
//   }
// }
// const animalGenerico = new Animal('Animal Genérico');
// animalGenerico.fazerBarulho(); // Saída: Barulho genérico do animal

// const cachorro = new Cachorro('Rex');
// cachorro.fazerBarulho(); // Saída: Au au!
// cachorro.abanarRabo(); // Saída: Abanando o rabo

