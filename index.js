class Cliente {
    nome;
    cpf;
 
}

class ContaCorrente {
    agencia;
    _saldo= 0;
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
    }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }
}



const cliente1= new Cliente();

 cliente1.nome = 'Ricardo'
 cliente1.cpf = '123.456.789-10'


 const cliente2= new Cliente();

 cliente2.nome = 'Alice';
 cliente2.cpf = '123.456.789-09'

 const contaCorrenteRicardo= new ContaCorrente()
 contaCorrenteRicardo.agencia = 123-4;

 contaCorrenteRicardo.depositar (100);
 contaCorrenteRicardo.depositar (100);

contaCorrenteRicardo.sacar(200);

console.log(contaCorrenteRicardo);
