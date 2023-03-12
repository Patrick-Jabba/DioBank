import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = ():string => {
    return 'Você pegou um empréstimo para pessoa jurídica'
  }

}