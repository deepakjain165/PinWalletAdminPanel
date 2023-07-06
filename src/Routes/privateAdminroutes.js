
import Dashboard from "../Views/Main/Dashboard"
import BbpsTxnData from "../Views/Main/Reports/BBPSTxn/BbpsTxnReport"
import BbpsBillFetch from "../Views/Main/Reports/BBPSbillFetch/BbpsBillFetch"
import CreditCardTransaction from "../Views/Main/Reports/CreditCardTxn/CreditCardTxn"
import DmtTransactions from "../Views/Main/Reports/DmtTxn/DmtTransactions"
import RechargeTxn from "../Views/Main/Reports/RechargeTxn/RechargeTxn"
import DynamicUpiTxn from "../Views/Main/Reports/dynamicUpi/DynamicUpiTxn"
import PayoutTransaction from "../Views/Main/Reports/payoutTxn/PayoutTransaction"
import ProtectedAdmin from "./protectedAdmin"


const PrivateAdmin = () => {
  return [
    {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/payout-report',
            element: <PayoutTransaction />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/dynamicUpi-report',
            element: <DynamicUpiTxn />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/recharge-report',
            element: <RechargeTxn />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/dmt-report',
            element: <DmtTransactions />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/creditCard-report',
            element: <CreditCardTransaction />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/bbpsBillFetch-report',
            element: <BbpsBillFetch />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/bbps-report',
            element: <BbpsTxnData />,
          },
        ],
      },
  ]
}

export default PrivateAdmin
