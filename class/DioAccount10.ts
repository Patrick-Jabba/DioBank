import { DioAccount } from "./DioAccount"

export class DioAccount10 extends DioAccount {
  
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (depositValue:number):void => {
    if(this.validateStatus()) {
      console.log(`Você depositou R$${depositValue} reais.`)
      let premiumDeposit = depositValue + 10
      this.setBalance(premiumDeposit);
      console.log(`Sua DioAccount10 depositou R$10,00 e o valor final acrescido ao seu saldo é de R$${premiumDeposit} reais.`)
    }
  }
}
