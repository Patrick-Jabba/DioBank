import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (loanValue:number):void => {
    if(this.validateStatus()) {
      this.setBalance(loanValue)
      console.log('Empréstimos efetuado com sucesso, verifique seu saldo atual.')
    } else {
      console.log('Conta inativa ou inválida, verifique e tente novamente.')
    }
  }

}