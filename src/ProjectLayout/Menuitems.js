import { FileTextOutlined, HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { setLocalStorageItem } from "../Utils";
export const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FileTextOutlined />,
    label: "Reports",
    children: [
      {
        key: "2.1",
        label: (
          <NavLink to={"/reports/payout-report"}>Payout Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.1");
        },
      },
      {
        key: "2.2",
        label: (
          <NavLink to={"/reports/dynamicUpi-report"}>
            DynamicUpi Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.2");
        },
      },
      {
        key: "2.3",
        label: (
          <NavLink to={"/reports/recharge-report"}>
            Recharge Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.3");
        },
      },
      {
        key: "2.4",
        label: <NavLink to={"/reports/dmt-report"}>DMT Transactions</NavLink>,
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.4");
        },
      },
      {
        key: "2.5",
        label: (
          <NavLink to={"/reports/creditCard-report"}>
            CreditCard Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.5");
        },
      },
      {
        key: "2.6",
        label: (
          <NavLink to={"/reports/bbpsBillFetch-report"}>
            BBPS Bill Fetch Data{" "}
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.6");
        },
      },
      {
        key: "2.7",
        label: (
          <NavLink to={"/reports/bbps-report"}>
            BBPS Transactions Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.7");
        },
      },
      {
        key: "2.8",
        label: (
          <NavLink to={"/reports/account-verification-report"}>
            Account Verification Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.8");
        },
      },
      {
        key: "2.9",
        label: (
          <NavLink to={"/reports/digiLocker-kyc-report"}>
            DigiLocker Kyc Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.9");
        },
      },
      {
        key: "2.10",
        label: (
          <NavLink to={"/reports/verification-api-report"}>
            Verification API Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.10");
        },
      },
      {
        key: "2.11",
        label: (
          <NavLink to={"/reports/walletPayout-report"}>
            Wallet Payout Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.11");
        },
      },
      {
        key: "2.12",
        label: (
          <NavLink to={"/reports/upiDmt-report"}>Upi DMT Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.12");
        },
      },
      {
        key: "2.13",
        label: (
          <NavLink to={"/reports/dynamicUpiGenerated-report"}>
            Dynamic Upi Generated Reports
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.13");
        },
      },
      {
        key: "2.14",
        label: (
          <NavLink to={"/reports/dynamicUpiGenerated-report"}>
            Dynamic Upi Generated Reports
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.14");
        },
      },
      {
        key: "2.15",
        label: (
          <NavLink to={"/reports/chargeBack-added"}>Charge-Back Added</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.15");
        },
      },
      {
        key: "2.16",
        label: (
          <NavLink to={"/reports/success-transaction-report"}>
            SUCCESS Transactions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "2.16");
        },
      },
    ],
  },
  {
    key: "3",
    icon: <FileTextOutlined />,
    label: "Settings",
    children: [
      {
        key: "3.1",
        label: (
          <NavLink to={"/settings/aadhar-pay-surcharges"}>
            Aadhar Pay surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.1");
        },
      },
      {
        key: "3.2",
        label: (
          <NavLink to={"/settings/aeps-commission"}>AEPS Commissions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.2");
        },
      },
      {
        key: "3.3",
        label: (
          <NavLink to={"/settings/bbps service commissions"}>
            BBPS Service Commissions
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.3");
        },
      },
      {
        key: "3.4",
        label: (
          <NavLink to={"/settings/civil-api-commission"}>
            Civil API Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.4");
        },
      },
      {
        key: "3.5",
        label: (
          <NavLink to={"/settings/creditCard-surcharges"}>
            CreditCard surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.5");
        },
      },
      {
        key: "3.6",
        label: (
          <NavLink to={"/settings/dmt-surcharges"}>DMT surcharges</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.6");
        },
      },
      {
        key: "3.7",
        label: (
          <NavLink to={"/settings/dynamic-upi-surcharges"}>
            Dynamic UPI Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.7");
        },
      },
      {
        key: "3.8",
        label: (
          <NavLink to={"/settings/mini-statement-commission"}>
            Mini Statement Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.8");
        },
      },
      {
        key: "3.9",
        label: (
          <NavLink to={"/settings/move-service-all-setting"}>
            Move Service All Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.9");
        },
      },
      {
        key: "3.10",
        label: (
          <NavLink to={"/settings/move-service-member-setting"}>
            Move Service Member Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.10");
        },
      },
      {
        key: "3.11",
        label: (
          <NavLink to={"/settings/nsdl-pan-card-fee-setting"}>
            NSDL PAN Card Fee Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.11");
        },
      },
      {
        key: "3.12",
        label: (
          <NavLink to={"/settings/payout-surcharges"}>
            PayOut Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.12");
        },
      },
      {
        key: "3.13",
        label: (
          <NavLink to={"/settings/recharge-commission"}>
            Recharge Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.13");
        },
      },
      {
        key: "3.14",
        label: (
          <NavLink to={"/settings/recharge-operators-api"}>
            Recharge Operators API
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.14");
        },
      },
      {
        key: "3.15",
        label: (
          <NavLink to={"/settings/service-block-time-setting"}>
            Service Block Time Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.15");
        },
      },
      {
        key: "3.16",
        label: (
          <NavLink to={"/settings/settlement-process-setting"}>
            Settlement Process Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.16");
        },
      },
      {
        key: "3.17",
        label: (
          <NavLink to={"/settings/upi-dmt-surcharges"}>
            UPI DMT Surcharges
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.17");
        },
      },
      {
        key: "3.18",
        label: (
          <NavLink to={"/settings/uti-coupon-fee-setting"}>
            UTI coupon Fee Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.18");
        },
      },
      {
        key: "3.19",
        label: (
          <NavLink to={"/settings/verification-api-service-commission"}>
            Verification API Service Commission
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.19");
        },
      },
      {
        key: "3.20",
        label: (
          <NavLink to={"/settings/wallet-capping-setting"}>
           Wallet Capping Setting
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "3.20");
        },
      },
    ],
  },
];
