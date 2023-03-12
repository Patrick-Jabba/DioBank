import { IndividualAccount } from './class/IndividualAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { DioAccount10 } from './class/DioAccount10';

const individualAccount: IndividualAccount = new IndividualAccount('Patrick', 1, 8765432)
individualAccount.withdraw(231)
individualAccount.deposit(232)
individualAccount.withdraw(231)
console.log(individualAccount.getBalance())

const companyAccount1: CompanyAccount = new CompanyAccount('Ligeirinho dos Calçados', 32)
console.log(companyAccount1.getBalance())
console.log(companyAccount1.getLoan(4320))
console.log(companyAccount1.getBalance())

const individualAccount10: DioAccount10 = new DioAccount10('Patrick Account 10', 2)
console.log(individualAccount10.deposit(467))
console.log(individualAccount10.getBalance())
