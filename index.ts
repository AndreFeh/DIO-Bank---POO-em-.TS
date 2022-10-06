// Criar DIO Bank
// Criar conta
// Depositar
// Encerrar Conta

// ORDEM DE CRIAÇÃO^^^
// >Primeiro Bank (class Conta)
// >Depois Conta (interface IConta)
//  ^->>> Definir a interface dentro do Construtor de Conta)
// > Em Seguida Funções para Saque e Deposito

// Criando conta depois de criado DIO Bank
interface IConta{
    nomeTitular: string;
    saldo?:number;
    contaAtiva: boolean
}


// >>> Criando DIO Bank
class Conta{ 
    private nomeTitular: string;
    private saldo: number;
    private contaAtiva: boolean;

    constructor({nomeTitular, saldo=0}:IConta){
        this.nomeTitular = nomeTitular,
        this.saldo = saldo;
        this.contaAtiva = true;

        console.log("\n\tBem Vindo ao DIO Bank\n");
    }
    // CONSULTAR SALDO
    meuSaldo = ():number => this.saldo; /* EM vez de um RETURN THIS.SALDO, ESSA FUNCTION(LAMBDA) */

    // DEPOSITAR (pegar saldo atual e somar com o deposito)
    depositar = (valorDeposito:number): boolean=>{
        if(!this.contaAtiva){
            console.log("Conta Desativada, impossível realizar deposito");
            return this.contaAtiva;
        }

        // this.saldo = this.saldo+valor APRIMORANDO...
        this.saldo += valorDeposito;

        console.log("Você Depositou R$ " + valorDeposito + " Seu novo saldo é R$ " + this.saldo)
        return this.contaAtiva;
    }

    // SACAR
    sacar = (valorSaque: number): boolean =>{ /*DEFINIR O TIPO DE RETORNO QUE O METODO FORNECE*/
        if(!this.contaAtiva){
            console.log("Conta Desativada, impossível realizar saque");
            return this.contaAtiva;
        }

        if(valorSaque <= this.saldo){
            this.saldo -= valorSaque;
            console.log("Você Sacou R$ " + valorSaque + ". Seu novo saldo é R$ " + this.saldo);
        } else console.log("Saldo Insulficiente! Você tem R$ " + this.saldo + " de Saldo!");
        return this.contaAtiva;
    }

    // CANCELAR CONTA
    cancelarConta = (/*Criar Atributo ContaAtiva*/) => {
        /*A conta nao pode ser cancelada se tiver debitos em aberto */
        if(this.saldo != 0){
            console.log("Conta com valores em aberto, não foi possível desativar a conta!");
            console.log("\nValor de R$ " + this.saldo + " Na Conta!");
        }
        this.contaAtiva = false;
        console.log("Conta Desativada com Sucesso!");
    }
    
}

// Criando Contas
// const contaA: Conta = new Conta ({nomeTitular: "André"});
const contaB: Conta = new Conta ({nomeTitular: "André", saldo: 500, contaAtiva: true});

// console.log(contaA);

// ver status de deposito
console.log("\nantes do deposito:\n",contaB.meuSaldo());
contaB.depositar(500);
console.log("depois do deposito:\n",contaB.meuSaldo());

console.log("\nantes do saque:\n",contaB.meuSaldo());
contaB.sacar(250);
console.log("depois do saque:\n",contaB.meuSaldo());

console.log("\nantes do saque:\n",contaB.meuSaldo());
contaB.sacar(1000);
console.log("depois do saque:\n",contaB.meuSaldo());
/* PARA QUE NO SAQUE A PESSOA NAO SAQUE MAIS DO QUE TEM NA CONTA, CRIAR UMA EXCESSAO... O IF^^^^^^, 
        Bem Vindo ao DIO Bank


antes do deposito:
 500
Você Depositou R$ 500 Seu novo saldo é R$ 1000
depois do deposito:
 1000

antes do saque:
 1000
Você Sacou R$ 250. Seu novo saldo é R$ 750
depois do saque:
 750

antes do saque:
 750
Você Sacou R$ 1000. Seu novo saldo é R$ -250
depois do saque:
 -250 */

contaB.cancelarConta();
// Para nao cancelar com valores negativos ou positivos na contaB, emitir excessão

contaB.sacar(750);

contaB.cancelarConta();

contaB.depositar(100000);
// para nao depositar ou sacar com a conta cancelada, emitir excessao

