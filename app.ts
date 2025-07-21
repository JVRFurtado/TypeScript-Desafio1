import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";

const companyAccount: CompanyAccount = new CompanyAccount('Empresa Fantasma', 122);
companyAccount.getLoan(120000);

companyAccount.withdraw(1000);

companyAccount.withdraw(1000000);

companyAccount.deposit(500);

companyAccount.getBalance();

console.log(companyAccount.getName());


const peopleAccount: PeopleAccount = new PeopleAccount(1111111, 'Conta de uma pessoa', 1111);
peopleAccount.deposit(520);

peopleAccount.withdraw(500);

peopleAccount.withdraw(500000);

console.log(peopleAccount.getName());

peopleAccount.getBalance();


const newAccount: NewAccount = new NewAccount('Nova conta', 4545);
newAccount.deposit(250);

newAccount.withdraw(250);

newAccount.withdraw(500000);

console.log(newAccount.getName());

newAccount.getBalance();