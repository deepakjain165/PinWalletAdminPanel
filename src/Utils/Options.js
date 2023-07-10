export const predicateObjectNames=[{
    value: 'PinWalletOrderId',
    label: 'PinWalletOrderId',
  },{
    value: 'PartnerName',
    label: 'PartnerName',
  },{
    value: 'AgentOrderId',
    label: 'AgentOrderId',
  },{
    value: 'APITransactionOrderId',
    label: 'APITransactionOrderId',
  },{
    value: 'BenificiaryAccount',
    label: 'BenificiaryAccount',
  },{
    value: 'ReferenceId',
    label: 'ReferenceId',
  },{
    value: 'TransferMode',
    label: 'TransferMode',
  },{
    value: 'Rrn',
    label: 'Rrn',
  },{
    value: 'Source',
    label: 'Source',
  },]

  export const DynamicUpiTxnPredicate=[
    {
      value: 'MerchantTranId',
      label: 'MerchantTranId',
    },{
      value: 'BankRrn',
      label: 'BankRrn',
    },{
      value: 'PWTransactionId',
      label: 'PWTransactionId',
    },{
      value: 'PartnerName',
      label: 'PartnerName',
    },
  ]
  export const DmtTxnPredicate=[
    {
      value: 'UserTransactionId',
      label: 'UserTransaction Id',
    },{
      value: 'PWTransactionId',
      label: 'PinWallet Transaction Id',
    }
  ]
  export const AccVerPredicate=[
    {
      value: 'UserOrderId',
      label: 'UserOrder Id',
    },{
      value: 'PinWalletOrderId',
      label: 'PinWallet Transaction Id',
    }
  ]
  export const VerAPIPredicate=[
    {
      value: 'UserTransactionId',
      label: 'User Transaction Id',
    },{
      value: 'PinwalletTrasnactionId',
      label: 'PinWallet Transaction Id',
    }
  ]
  export const DynamicUpiGenPredicate=[
    {
      value: 'CUUPIId',
      label: 'CUUPIID',
    },{
      value: 'UpiId',
      label: 'UpiId',
    },
    {
      value: 'MemberId',
      label: 'MemberId',
    },{
      value: 'PartnerName',
      label: 'PartnerName',
    }
  ]
  export const ChargeBackAddedPredicate=[
    {
      value: 'WalletTransactionId',
      label: 'WalletTransactionId',
    },{
      value: 'ClientTransactionId',
      label: 'ClientTransactionId',
    },
    {
      value: 'BankRrn',
      label: 'BankRrn',
    },{
      value: 'PartnerName',
      label: 'PartnerName',
    }
  ]
  export const PartnerPredicate=[
    {
      value: 'Email',
      label: 'Email',
    },{
      value: 'FullName',
      label: 'FullName',
    },
    {
      value: 'Phone',
      label: 'Phone',
    }
  ]
  export const NumberPerPage=[
    {
      value: '10',
      label: '10',
    },{
      value: '20',
      label: '20',
    },
    {
      value: '30',
      label: '30',
    }, {
      value: '50',
      label: '50',
    }
  ]