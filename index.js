import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1= new Cliente();

 cliente1.nome = 'Ricardo'
 cliente1.cpf = '123.456.789-10'


 const cliente2= new Cliente();

 cliente2.nome = 'Alice';
 cliente2.cpf = '123.456.789-09'

 const contaCorrenteRicardo= new ContaCorrente()
 contaCorrenteRicardo.agencia = 123-4;
 contaCorrenteRicardo.cliente = cliente1;
 contaCorrenteRicardo.depositar(4000);
 
 const contaCorrenteAlice= new ContaCorrente()
contaCorrenteAlice.agencia = 123-4;
contaCorrenteAlice.cliente = cliente2;

contaCorrenteRicardo.transferir(1000, contaCorrenteAlice);
console.log(contaCorrenteAlice);
