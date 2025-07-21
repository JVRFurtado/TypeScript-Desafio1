import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (deposit: number): void => {
        if(this.validateStatus()) {
            this.balance += (deposit + 10);
            console.log(`Você depositou R$${deposit}.
Seu saldo atual é de R$${this.balance}.`);
        };
    };
};