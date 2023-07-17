import AddSurcharge from "../Common/AddSurcharge";
import AccessRightList from "../Views/Main/AccessRights/AccessRightList";
import RoleList from "../Views/Main/AccessRights/RoleList";
import FundRequest from "../Views/Main/BusinessWallet/FundRequest/FundRequest";
import PartnerTxn from "../Views/Main/BusinessWallet/Transactions/PartnerTxn";
import TransactionDetail from "../Views/Main/BusinessWallet/Transactions/TransactionDetail";
import Dashboard from "../Views/Main/Dashboard";
import Packages from "../Views/Main/Packages/Packages";
import DocumentPage from "../Views/Main/Partners/DocumentPage";
import EditPartnerDetail from "../Views/Main/Partners/EditPartnerDetail";
import PartnerCallBackSetting from "../Views/Main/Partners/PartnerCallBackSetting";
import PartnerIps from "../Views/Main/Partners/PartnerIps";
import Partners from "../Views/Main/Partners/Partners";
import AccountVerification from "../Views/Main/Reports/AccountVer/AccountVerification";
import BbpsTxnData from "../Views/Main/Reports/BBPSTxn/BbpsTxnReport";
import BbpsBillFetch from "../Views/Main/Reports/BBPSbillFetch/BbpsBillFetch";
import ChargeBackAdded from "../Views/Main/Reports/ChargeBackAdded/ChargeBackAdded";
import CreditCardTransaction from "../Views/Main/Reports/CreditCardTxn/CreditCardTxn";
import DmtTransactions from "../Views/Main/Reports/DmtTxn/DmtTransactions";
import DynamicUpiGenerated from "../Views/Main/Reports/DynamicUpiGenerated/Dynamicupigen";
import LiveRecharge from "../Views/Main/Reports/LiveRecharge/LiveRecharge";
import RechargeTxn from "../Views/Main/Reports/RechargeTxn/RechargeTxn";
import UPIDmtTxn from "../Views/Main/Reports/UPIDmt/UpiDmtTxn";
import VerificationAPI from "../Views/Main/Reports/VerificationApi/VerificationAPI";
import WalletPayout from "../Views/Main/Reports/WalletPyout/WalletPayoutTxn";
import DigilockerKyc from "../Views/Main/Reports/digilockerKyc/DigilockerKycReport";
import DynamicUpiTxn from "../Views/Main/Reports/dynamicUpi/DynamicUpiTxn";
import PayoutTransaction from "../Views/Main/Reports/payoutTxn/PayoutTransaction";
import Services from "../Views/Main/Services/Services";
import DMTsurcharges from "../Views/Main/Settings/DMTsurcharges";
import RechargeOperatorsAPI from "../Views/Main/Settings/RechargeOperatorsApi";
import User from "../Views/Main/Users/User";
import ProtectedAdmin from "./protectedAdmin";
import RechargeCommission from "../Views/Main/Settings/RechargeCommission";
import BBPSservicecommission from "../Views/Main/Settings/BBPSserviceCommission";
import CreditCardSurcharge from "../Views/Main/Settings/CreditCardSurcharges";
import AepsCommission from "../Views/Main/Settings/AEPScommission";
import AadharPay from "../Views/Main/Settings/AadharPaySurcharges";
import UpidmtSurcharge from "../Views/Main/Settings/UPIdmtSurcharges";
import DynamicUpiSurcharge from "../Views/Main/Settings/DynaminUpiSurcharges";
import PayoutSurcharge from "../Views/Main/Settings/PayoutSurcharges";
import AddDeduct from "../Views/Main/BusinessWallet/AddDeductFund/AddDeduct";
import MiniStatementCommission from "../Views/Main/Settings/MiniStatementCommission";
import VerificationAPIserviceCommission from "../Views/Main/Settings/VerificationAPIserviceCommission";
import WalletCappingSetting from "../Views/Main/Settings/WalletCappingSetting";
import MoveServiceMemberSetting from "../Views/Main/Settings/MoveServiceMemberSetting";
import MoveServiceAllSetting from "../Views/Main/Settings/MoveServiceAllSetting";

const PrivateAdmin = () => {
  return [
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/payout-report",
          element: <PayoutTransaction />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/dynamicUpi-report",
          element: <DynamicUpiTxn />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/recharge-report",
          element: <RechargeTxn />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/dmt-report",
          element: <DmtTransactions />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/creditCard-report",
          element: <CreditCardTransaction />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/bbpsBillFetch-report",
          element: <BbpsBillFetch />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/account-verification-report",
          element: <AccountVerification />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/digiLocker-kyc-report",
          element: <DigilockerKyc />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/verification-api-report",
          element: <VerificationAPI />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/walletPayout-report",
          element: <WalletPayout />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/upiDmt-report",
          element: <UPIDmtTxn />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/dynamicUpiGenerated-report",
          element: <DynamicUpiGenerated />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/chargeBack-added",
          element: <ChargeBackAdded />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/reports/recharge-report-live",
          element: <LiveRecharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/partners",
          element: <Partners />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/partners/documents",
          element: <DocumentPage />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/partner-callBack-setting",
          element: <PartnerCallBackSetting />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/partner/edit",
          element: <EditPartnerDetail />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/partner-ips",
          element: <PartnerIps />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/packages",
          element: <Packages />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/users",
          element: <User />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/business-wallet/fund-requests",
          element: <FundRequest />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/business-wallet/add-deduct-fund",
          element: <AddDeduct />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/business-wallet",
          element: <PartnerTxn />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/business-wallet/transactions",
          element: <TransactionDetail />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/roles",
          element: <RoleList />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/role-permission",
          element: <AccessRightList />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/aadharPay-surcharge-setting",
          element: <AadharPay />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/aadharPay-surcharge-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/aeps-comm-setting",
          element: <AepsCommission />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/aeps-comm-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/comm0n-settings/bbps-services-commissions",
          element: <BBPSservicecommission />,
        },
      ],
    },
    // {
    //   element: <ProtectedAdmin />,
    //   children: [
    //     {
    //       path: "/settings/civil-api-commission",
    //       element: <CivilAPIcommission />,
    //     },
    //   ],
    // },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/creditCard-surcharge-setting",
          element: <CreditCardSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/creditCard-surcharge-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/dmt-surcharge-setting",
          element: <DMTsurcharges />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/dmt-surcharge-setting/Change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/dynamicUpi-surcharge-setting",
          element: <DynamicUpiSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/dynamicUpi-surcharge-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/miniStatement-comm-setting",
          element: <MiniStatementCommission />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/move-service-all-member-setting",
          element:<MoveServiceAllSetting />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/move-service-member-setting",
          element: <MoveServiceMemberSetting />,
        },
      ],
    },
    // {
    //   element: <ProtectedAdmin />,
    //   children: [
    //     {
    //       path: "/settings/nsdl-pan-card-fee-setting",
    //       element: <NSDLpanCardFeeSetting />,
    //     },
    //   ],
    // },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/payout-surcharge-setting",
          element: <PayoutSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/payout-surcharge-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/recharge-commission",
          element: <RechargeCommission />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/recharge-OpAPI",
          element: <RechargeOperatorsAPI />,
        },
      ],
    },
    // {
    //   element: <ProtectedAdmin />,
    //   children: [
    //     {
    //       path: "/settings/service-block-time-setting",
    //       element: <ServiceBlockTimeSetting />,
    //     },
    //   ],
    // },
    // {
    //   element: <ProtectedAdmin />,
    //   children: [
    //     {
    //       path: "/settings/settlement-process-setting",
    //       element: <SettlementProcessSetting />,
    //     },
    //   ],
    // },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/upiDmt-surcharge-setting",
          element: <UpidmtSurcharge />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/upiDmt-surcharge-setting/change",
          element: <AddSurcharge />,
        },
      ],
    },
    // {
    //   element: <ProtectedAdmin />,
    //   children: [
    //     {
    //       path: "/settings/uti-coupon-fee-setting",
    //       element: <UTIcouponFeeSetting />,
    //     },
    //   ],
    // },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/verification-api-services-commission-setting",
          element: <VerificationAPIserviceCommission />,
        },
      ],
    },
    {
      element: <ProtectedAdmin />,
      children: [
        {
          path: "/common-settings/wallet-capping-setting",
          element: <WalletCappingSetting />,
        },
      ],
    },
  ];
};

export default PrivateAdmin;
