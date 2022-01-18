import { Bank } from './Bank'
import { Money } from './Money'
import { Sum } from './Sum'

const bank = new Bank()
bank.addRate('EUR', 'USD', 2)

const wallet = Money.dollar(25.99)
const wallet2 = Money.euro(65.36)

const sum = new Sum(wallet, wallet2)
console.log(`My allet has ${sum.reduce(bank, 'USD').toString()}`)
