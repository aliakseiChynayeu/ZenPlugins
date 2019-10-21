import { convertTransaction } from '../../../converters'

describe('convertTransaction', () => {
  it.each([
    {
      id: 'a0cbde56-6b1e-4d8d-8588-0e3767199551',
      companyId: '5b3ee23f-071d-4da4-b31e-a7d10408df59',
      status: 'Canceled',
      category: 'Credit',
      contragentName: '',
      contragentInn: '',
      contragentKpp: '',
      contragentBankAccountNumber: '',
      contragentBankName: '',
      contragentBankBic: '',
      currency: 'RUR',
      amount: 1,
      bankAccountNumber: '40802810470014241168',
      paymentPurpose: 'Операция списания средств с карты 521355%2606 YANDEX.TAXI\\MOSCOW\\RU',
      created: '2019-09-01T00:00:00',
      docNumber: '',
      absId: '',
      ibsoId: '0',
      kbk: '',
      oktmo: '',
      paymentBasis: '',
      taxCode: '',
      taxDocNum: '',
      taxDocDate: '',
      payerStatus: '',
      uin: ''
    },
    {
      id: 'e7d8bb4c-c7fb-40fd-ba3e-aae202a60343',
      companyId: '84b0fc95-e5c9-46a6-b5ac-a97702c6241f',
      status: 'ClarifyRequiredOutcome',
      category: 'Credit',
      contragentName: 'ИП НИКОЛАЕВ НИКОЛАЙ НИКОЛАЕВИЧ',
      contragentInn: '421716143132',
      contragentKpp: '',
      contragentBankAccountNumber: '30302810200000002992',
      contragentBankName: 'Ф-л Московский №2 ПАО Банк "ФК Открытие"',
      contragentBankBic: '044525175',
      currency: 'RUR',
      amount: 7500,
      bankAccountNumber: '40802810170010130227',
      paymentPurpose: 'Перевод ошибочно перечисленной суммы Без НДС',
      executed: '2019-10-10T00:00:00',
      created: '2019-10-10T12:20:34.192',
      docNumber: '42688',
      absId: '26506224713',
      ibsoId: '26506470889',
      kbk: '',
      oktmo: '',
      paymentBasis: '',
      taxCode: '',
      taxDocNum: '',
      taxDocDate: '',
      payerStatus: '',
      uin: '0'
    }
  ])('skips specific transaction', (apiTransaction) => {
    expect(convertTransaction(apiTransaction, { id: 'account', instrument: 'RUB' })).toBeNull()
  })
})
