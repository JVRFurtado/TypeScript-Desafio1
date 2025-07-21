export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    };

    getName = (): string => {
        return this.name;
    };

    deposit = (deposit: number): void => {
        if(this.validateStatus()) {
            this.balance += deposit;
            console.log(`Você depositou R$${deposit}.
Seu saldo atual é de R$${this.balance}.`);
        };
    };

    withdraw = (withdraw: number): void => {
        if(this.validateStatus() && this.balance > withdraw) {
            this.balance -= withdraw;
            console.log(`Você sacou R$${withdraw}.
Seu saldo atual é de R$${this.balance}.`);
        } else {
            console.log('Saldo insuficiente para o saque');
        };
    };

    getBalance = (): void => {
        console.log(this.balance);
    };

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status;
        }

        throw new Error('Conta Inválida');
    };
};