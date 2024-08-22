const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contas = {
    '123456': { nome: 'Gustavo Shaikoski', senha: '123', saldo: 1000 },
    '654321': { nome: 'Diego Alex Iarek', senha: '456', saldo: 500 }
};


function verificarConta(numeroConta, senha) {
    const conta = contas[numeroConta];
    return conta && conta.senha === senha;
}


function deposito(numeroConta, valor) {
    if (valor > 0) {
        contas[numeroConta].saldo += valor;
        console.log(`Depósito realizado com sucesso. Novo saldo: R$${contas[numeroConta].saldo.toFixed(2)}`);
    } else {
        console.log("O valor do depósito deve ser positivo.");
    }
}


function retirada(numeroConta, valor) {
    const saldoAtual = contas[numeroConta].saldo;
    if (valor > 0) {
        if (valor <= saldoAtual) {
            contas[numeroConta].saldo -= valor;
            console.log(`Retirada realizada com sucesso. Novo saldo: R$${contas[numeroConta].saldo.toFixed(2)}`);
        } else {
            console.log("Sem dinheiro para retirar.");
        }
    } else {
        console.log("O valor da retirada deve ser positivo.");
    }
}


function menu() {
    rl.question("Digite o número da conta: ", numeroConta => {
        rl.question("Digite a senha: ", senha => {
            if (verificarConta(numeroConta, senha)) {
                console.log(`\nBem-vindo(a), ${contas[numeroConta].nome}`);
                opcaoMenu(numeroConta);
            } else {
                console.log("Número da conta ou senha incorretos.");
                rl.close();
            }
        });
    });
}


function opcaoMenu(numeroConta) {
    console.log("\n1. Depósito");
    console.log("2. Retirada");
    console.log("3. Sair");

    rl.question("Escolha uma opção: ", opcao => {
        if (opcao === '1') {
            rl.question("Digite o valor do depósito: R$", valor => {
                deposito(numeroConta, parseFloat(valor));
                opcaoMenu(numeroConta);
            });
        } else if (opcao === '2') {
            rl.question("Digite o valor da retirada: R$", valor => {
                retirada(numeroConta, parseFloat(valor));
                opcaoMenu(numeroConta);
            });
        } else if (opcao === '3') {
            console.log("Saindo...");
            rl.close();
        } else {
            console.log("Opção inválida. Tente novamente.");
            opcaoMenu(numeroConta);
        }
    });
}


menu();
