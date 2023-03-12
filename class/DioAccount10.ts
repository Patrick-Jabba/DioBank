import { DioAccount } from "./DioAccount"

export class DioAccount10 extends DioAccount {
  
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (depositValue:number):void => {
    if(this.validateStatus()) {
      let premiumDeposit = depositValue * 2
      console.log(`Você depositou R$${premiumDeposit} reais.`)
    }
  }
}
