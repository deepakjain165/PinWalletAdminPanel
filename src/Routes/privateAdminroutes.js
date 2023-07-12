
import AccessRightList from "../Views/Main/AccessRights/AccessRightList"
import RoleList from "../Views/Main/AccessRights/RoleList"
import FundRequest from "../Views/Main/BusinessWallet/FundRequest/FundRequest"
import Dashboard from "../Views/Main/Dashboard"
import Packages from "../Views/Main/Packages/Packages"
import PartnerIps from "../Views/Main/Partners/PartnerIps"
import Partners from "../Views/Main/Partners/Partners"
import AccountVerification from "../Views/Main/Reports/AccountVer/AccountVerification"
import BbpsTxnData from "../Views/Main/Reports/BBPSTxn/BbpsTxnReport"
import BbpsBillFetch from "../Views/Main/Reports/BBPSbillFetch/BbpsBillFetch"
import ChargeBackAdded from "../Views/Main/Reports/ChargeBackAdded/ChargeBackAdded"
import CreditCardTransaction from "../Views/Main/Reports/CreditCardTxn/CreditCardTxn"
import DmtTransactions from "../Views/Main/Reports/DmtTxn/DmtTransactions"
import DynamicUpiGenerated from "../Views/Main/Reports/DynamicUpiGenerated/Dynamicupigen"
import LiveRecharge from "../Views/Main/Reports/LiveRecharge/LiveRecharge"
import RechargeTxn from "../Views/Main/Reports/RechargeTxn/RechargeTxn"
import UPIDmtTxn from "../Views/Main/Reports/UPIDmt/UpiDmtTxn"
import VerificationAPI from "../Views/Main/Reports/VerificationApi/VerificationAPI"
import WalletPayout from "../Views/Main/Reports/WalletPyout/WalletPayoutTxn"
import DigilockerKyc from "../Views/Main/Reports/digilockerKyc/DigilockerKycReport"
import DynamicUpiTxn from "../Views/Main/Reports/dynamicUpi/DynamicUpiTxn"
import PayoutTransaction from "../Views/Main/Reports/payoutTxn/PayoutTransaction"
import Services from "../Views/Main/Services/Services"
import User from "../Views/Main/Users/User"
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
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/account-verification-report',
            element: <AccountVerification />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/digiLocker-kyc-report',
            element: <DigilockerKyc />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/verification-api-report',
            element: <VerificationAPI />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/walletPayout-report',
            element: <WalletPayout />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/upiDmt-report',
            element: <UPIDmtTxn />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/dynamicUpiGenerated-report',
            element: <DynamicUpiGenerated />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/chargeBack-added',
            element: <ChargeBackAdded />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/reports/recharge-report-live',
            element: <LiveRecharge />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/partners',
            element: <Partners />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/partner-ips',
            element: <PartnerIps />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/packages',
            element: <Packages />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/services',
            element: <Services />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/users',
            element: <User />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/business-wallet/fund-requests',
            element: <FundRequest />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/roles',
            element: <RoleList />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/role-permission',
            element: <AccessRightList />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/aadhar-pay-surcharges",
            element: <AadharPaySurcharges />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/aeps-commission",
            element: <AEPScommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/bbps service commissions",
            element: <BBPSservicecommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/civil-api-commission",
            element: <CivilAPIcommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/creditCard-surcharges",
            element: <CreditCardSurcharges />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/dmt-surcharges",
            element: <DMTsurcharges />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/dynamic-upi-surcharges",
            element: <DynamicUpiSurcharges />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/mini-statement-commission",
            element: <MiniStatementCommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/move-service-all-setting",
            element: <MoveServiceAllSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/move-service-member-setting",
            element: <MoveServiceMemberSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/nsdl-pan-card-fee-setting",
            element: <NSDLpanCardFeeSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/payout-surcharges",
            element: <PayoutSurcharges />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/recharge-commission",
            element: <RechargeCommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/recharge-operators-api",
            element: <RechargeOperatorsAPI />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/service-block-time-setting",
            element: <ServiceBlockTimeSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/settlement-process-setting",
            element: <SettlementProcessSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/upi-dmt-surcharges",
            element: <UPIdmtSurcharges />,
          },
        ],
      },
  
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/uti-coupon-fee-setting",
            element: <UTIcouponFeeSetting />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/verification-api-service-commission",
            element: <VerificationAPIserviceCommission />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: "/settings/wallet-capping-setting",
            element: <WalletCappingSetting />,
          },
        ],
      },
  ]
};

export default PrivateAdmin;
