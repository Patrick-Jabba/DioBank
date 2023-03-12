export abstract class DioAccount {
  private name: string
  private accountNumber: number
  private balance: number
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
    this.balance = 0
  }

  public setBalance = (balance:number):number => {
    this.balance = balance
    return balance
  }

  public getBalance = ():number => {
    console.log(`Seu saldo atual é de R$${this.balance},00`)
    return this.balance
  }

  deposit = (depositValue:number):void => {
    if(this.validateStatus()) {
      this.balance += depositValue
      console.log(`Você depositou R$${depositValue} reais.`)
    }
  }

  withdraw = (withdrawValue: number):void | string => {
    if(this.validateStatus() && this.balance >= withdrawValue) {
      this.balance -= withdrawValue
      console.log(`Você sacou R$${withdrawValue} reais.`)
    } else {
      console.log('Saldo insuficiente para saque, verifique e tente novamente.')
    }
  }

  public validateStatus = (): boolean => {
    if(this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
