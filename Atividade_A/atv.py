
contas = {
    '123456': {'nome': 'Gustavo', 'senha': '123', 'saldo': 1000},
    '654321': {'nome': 'Diego', 'senha': '456', 'saldo': 500}
}

def verificar_conta(numero_conta, senha):
    
    conta = contas.get(numero_conta)
    if conta and conta['senha'] == senha:
        return True
    return False

def deposito(numero_conta, valor):
    
    if valor > 0:
        contas[numero_conta]['saldo'] += valor
        print(f"Depósito realizado com sucesso. Novo saldo: R${contas[numero_conta]['saldo']:.2f}")
    else:
        print("O valor do depósito deve ser positivo.")

def retirada(numero_conta, valor):
    
    saldo_atual = contas[numero_conta]['saldo']
    if valor > 0:
        if valor <= saldo_atual:
            contas[numero_conta]['saldo'] -= valor
            print(f"Retirada realizada com sucesso. Novo saldo: R${contas[numero_conta]['saldo']:.2f}")
        else:
            print("Sem dinheiro para retirar.")
    else:
        print("O valor da retirada deve ser positivo.")

def menu():
    
    numero_conta = input("Digite o número da conta: ")
    senha = input("Digite a senha: ")

    if verificar_conta(numero_conta, senha):
        print("\nBem-vindo(a),", contas[numero_conta]['nome'])
        while True:
            print("\n1. Depósito")
            print("2. Retirada")
            print("3. Sair")
            opcao = input("Escolha uma opção: ")

            if opcao == '1':
                valor = float(input("Digite o valor do depósito: R$"))
                deposito(numero_conta, valor)
            elif opcao == '2':
                valor = float(input("Digite o valor da retirada: R$"))
                retirada(numero_conta, valor)
            elif opcao == '3':
                print("Saindo...")
                break
            else:
                print("Opção inválida. Tente novamente.")
    else:
        print("Número da conta ou senha incorretos.")


menu()
