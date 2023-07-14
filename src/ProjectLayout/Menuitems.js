import {
  BarChartOutlined,
  FileTextOutlined,
  GiftFilled,
  HomeOutlined,
  LockFilled,
  SettingFilled,
  WalletFilled,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { setLocalStorageItem } from "../Utils";
import { svghandshake, users } from "../Controller/image";
export const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "3",
    icon: <BarChartOutlined />,
    label: "Statistics",
  },
  {
    key: "4",
    icon: <LockFilled />,
    label: <NavLink to={"/roles"}>Access Rights</NavLink>,
    onClick: () => {
      setLocalStorageItem("selectedTab", "4");
    },
  },
  {
    key: "5",
    icon: users,
    label: <NavLink to={"/users"}>Users</NavLink>,
    onClick: () => {
      setLocalStorageItem("selectedTab", "5");
    },
  },
  {
    key: "6",
    icon: <SettingFilled />,
    label: <NavLink to={"/services"}>Services</NavLink>,
    onClick: () => {
      setLocalStorageItem("selectedTab", "6");
    },
  },
  {
    key: "7",
    icon: <GiftFilled />,
    label: <NavLink to={"/packages"}>Packages</NavLink>,
    onClick: () => {
      setLocalStorageItem("selectedTab", "7");
    },
  },
  {
    key: "8",
    icon: svghandshake,
    label: <NavLink to={"/partners"}>Partners</NavLink>,
    onClick: () => {
      setLocalStorageItem("selectedTab", "8");
    },
  },
  {
    key: "9",
    icon: <WalletFilled />,
    label: "Business Wallet",
    children: [
      {
        key: "9.1",
        label: (
          <NavLink to={"/business-wallet"}>
            <p>Transactions</p>
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "9.1");
        },
      },
      {
        key: "9.2",
        label: (
          <NavLink to={"/business-wallet/add-deduct-fund"}>
            <p>Add/Deduct Fund</p>
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "9.2");
        },
      },
      {
        key: "9.3",
        label: (
          <NavLink to="/business-wallet/fund-requests">Fund Requests</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "9.3");
        },
      },
    ],
  },
  {
    key: "2",
    icon: <FileTextOutlined />,
    label: "Reports",
    children: [
      {
        key: "1.1",
        label: (
          <NavLink to={"/reports/payout-report"}>Payout Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.1");
        },
      },
      {
        key: "1.2",
        label: (
          <NavLink to={"/reports/dynamicUpi-report"}>
            DynamicUpi Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.2");
        },
      },
      {
        key: "1.3",
        label: (
          <NavLink to={"/reports/recharge-report"}>
            Recharge Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.3");
        },
      },
      {
        key: "1.17",
        label: (
          <NavLink to={"/reports/recharge-report-live"}>
            Recharge Transactions (Live)
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.17");
        },
      },
      {
        key: "1.4",
        label: <NavLink to={"/reports/dmt-report"}>DMT Transactions</NavLink>,
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.4");
        },
      },
      {
        key: "1.5",
        label: (
          <NavLink to={"/reports/creditCard-report"}>
            CreditCard Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.5");
        },
      },
      {
        key: "1.6",
        label: (
          <NavLink to={"/reports/bbpsBillFetch-report"}>
            BBPS Bill Fetch Data{" "}
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.6");
        },
      },
      {
        key: "1.7",
        label: (
          <NavLink to={"/reports/bbps-report"}>
            BBPS Transactions Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.7");
        },
      },
      {
        key: "1.8",
        label: (
          <NavLink to={"/reports/account-verification-report"}>
            Account Verification Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.8");
        },
      },
      {
        key: "1.9",
        label: (
          <NavLink to={"/reports/digiLocker-kyc-report"}>
            DigiLocker Kyc
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.9");
        },
      },
      {
        key: "1.10",
        label: (
          <NavLink to={"/reports/verification-api-report"}>
            Verification API
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.10");
        },
      },
      {
        key: "1.11",
        label: (
          <NavLink to={"/reports/walletPayout-report"}>
            Wallet Payout Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.11");
        },
      },
      {
        key: "1.12",
        label: (
          <NavLink to={"/reports/upiDmt-report"}>Upi DMT Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.12");
        },
      },
      {
        key: "1.13",
        label: (
          <NavLink to={"/reports/dynamicUpiGenerated-report"}>
            Dynamic Upi Generated Reports
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.13");
        },
      },
      {
        key: "1.15",
        label: (
          <NavLink to={"/reports/chargeBack-added"}>Charge-Back Added</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.15");
        },
      },
      {
        key: "1.16",
        label: (
          <NavLink to={"/reports/success-transaction-report"}>
            SUCCESS Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.16");
        },
      },
    ],
  },
  {
    key: "10",
    icon: <FileTextOutlined />,
    label: "Settings",
    children: [
      {
        key: "10.1",
        label: (
          <NavLink to={"/common-settings/aadharPay-surcharge-setting"}>
            Aadhar Pay surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.1");
        },
      },
      {
        key: "10.2",
        label: (
          <NavLink to={"/common-settings/aeps-comm-setting"}>
            AEPS Commissions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.2");
        },
      },
      {
        key: "10.3",
        label: (
          <NavLink to={"/common-settings/bbps-services-commission"}>
            BBPS Service Commissions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.3");
        },
      },
      {
        key: "10.4",
        label: (
          <NavLink to={"/settings/civil-api-commission"}>
            Civil API Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.4");
        },
      },
      {
        key: "10.5",
        label: (
          <NavLink to={"/common-settings/creditCard-surcharge-setting"}>
            CreditCard surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.5");
        },
      },
      {
        key: "10.6",
        label: (
          <NavLink to={"/common-settings/dmt-surcharge-setting"}>
            DMT surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.6");
        },
      },
      {
        key: "10.7",
        label: (
          <NavLink to={"/common-settings/dynamicUpi-surcharge-setting"}>
            Dynamic UPI Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.7");
        },
      },
      {
        key: "10.8",
        label: (
          <NavLink to={"/common-settings/miniStatement-comm-setting"}>
            Mini Statement Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.8");
        },
      },
      {
        key: "10.9",
        label: (
          <NavLink to={"/settings/move-service-all-setting"}>
            Move Service All Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.9");
        },
      },
      {
        key: "10.10",
        label: (
          <NavLink to={"/settings/move-service-member-setting"}>
            Move Service Member Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.10");
        },
      },
      {
        key: "10.11",
        label: (
          <NavLink to={"/settings/nsdl-pan-card-fee-setting"}>
            NSDL PAN Card Fee Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.11");
        },
      },
      {
        key: "10.12",
        label: (
          <NavLink to={"/common-settings/payout-surcharge-setting"}>
            PayOut Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.12");
        },
      },
      {
        key: "10.13",
        label: (
          <NavLink to={"/common-settings/recharge-commission"}>
            Recharge Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.13");
        },
      },
      {
        key: "10.14",
        label: (
          <NavLink to={"/common-settings/recharge-OpAPI"}>
            Recharge Operators API
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.14");
        },
      },
      {
        key: "10.15",
        label: (
          <NavLink to={"/settings/service-block-time-setting"}>
            Service Block Time Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.15");
        },
      },
      {
        key: "10.16",
        label: (
          <NavLink to={"/settings/settlement-process-setting"}>
            Settlement Process Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.16");
        },
      },
      {
        key: "10.17",
        label: (
          <NavLink to={"/common-settings/upiDmt-surcharge-setting"}>
            UPI DMT Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.17");
        },
      },
      {
        key: "10.18",
        label: (
          <NavLink to={"/settings/uti-coupon-fee-setting"}>
            UTI coupon Fee Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.18");
        },
      },
      {
        key: "10.19",
        label: (
          <NavLink to={"/settings/verification-api-service-commission"}>
            Verification API Service Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.19");
        },
      },
      {
        key: "10.20",
        label: (
          <NavLink to={"/settings/wallet-capping-setting"}>
            Wallet Capping Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "10.20");
        },
      },
    ],
  },
];
