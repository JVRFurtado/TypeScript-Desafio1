import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    };

    getLoan = (loan: number): void => {
        if(this.validateStatus()){
            this.balance += loan;
            console.log(`Voce realizou um empréstimo de R$${loan}.
Seu saldo atual é de R$${this.balance}.`);
        } else {
            throw new Error('Conta Inválida');
        };
    };
};