import Dashboard from "../Views/Main/Dashboard";
import BbpsTxnData from "../Views/Main/Reports/BBPSTxn/BbpsTxnReport";
import BbpsBillFetch from "../Views/Main/Reports/BBPSbillFetch/BbpsBillFetch";
import CreditCardTransaction from "../Views/Main/Reports/CreditCardTxn/CreditCardTxn";
import DmtTransactions from "../Views/Main/Reports/DmtTxn/DmtTransactions";
import RechargeTxn from "../Views/Main/Reports/RechargeTxn/RechargeTxn";
import DynamicUpiTxn from "../Views/Main/Reports/dynamicUpi/DynamicUpiTxn";
import PayoutTransaction from "../Views/Main/Reports/payoutTxn/PayoutTransaction";
import AEPScommission from "../Views/Main/Settings/AEPScommission";
import AadharPaySurcharges from "../Views/Main/Settings/AadharPaySurcharges";
import BBPSservicecommission from "../Views/Main/Settings/BBPSserviceCommission";
import CivilAPIcommission from "../Views/Main/Settings/CivilAPIcommission";
import CreditCardSurcharges from "../Views/Main/Settings/CreditCardSurcharges";
import DMTsurcharges from "../Views/Main/Settings/DMTsurcharges";
import DynamicUpiSurcharges from "../Views/Main/Settings/DynaminUpiSurcharges";
import MiniStatementCommission from "../Views/Main/Settings/MiniStatementCommission";
import MoveServiceAllSetting from "../Views/Main/Settings/MoveServiceAllSetting";
import MoveServiceMemberSetting from "../Views/Main/Settings/MoveServiceMemberSetting";
import NSDLpanCardFeeSetting from "../Views/Main/Settings/NSDLpanCardFeeSetting";
import PayoutSurcharges from "../Views/Main/Settings/PayoutSurcharges";
import RechargeCommission from "../Views/Main/Settings/RechargeCommission";
import RechargeOperatorsAPI from "../Views/Main/Settings/RechargeOperatorsApi";
import ServiceBlockTimeSetting from "../Views/Main/Settings/ServiceBlockTimeSetting";
import SettlementProcessSetting from "../Views/Main/Settings/SettlementProcessSetting";
import UPIdmtSurcharges from "../Views/Main/Settings/UPIdmtSurcharges";
import UTIcouponFeeSetting from "../Views/Main/Settings/UTIcouponFeeSetting";
import VerificationAPIserviceCommission from "../Views/Main/Settings/VerificationAPIserviceCommission";
import WalletCappingSetting from "../Views/Main/Settings/WalletCappingSetting";
import ProtectedAdmin from "./protectedAdmin";

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
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
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
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
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
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
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
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
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
          path: "/reports/bbps-report",
          element: <BbpsTxnData />,
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
  ];
};

export default PrivateAdmin;
