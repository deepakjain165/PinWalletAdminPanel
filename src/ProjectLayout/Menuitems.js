import { BarChartOutlined, FileTextOutlined, GiftFilled, HomeOutlined, LockFilled, SettingFilled, WalletFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { setLocalStorageItem } from "../Utils";
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
    label: "Accounts rights",
  },
  {
    key: "5",
    icon: <LockFilled />,
    label: "Users",
  },
  {
    key: "6",
    icon: <SettingFilled />,
    label:  <NavLink to={"/services"}>Services</NavLink>,
    
  },
  {
    key: "7",
    icon: <GiftFilled />,
    label: <NavLink to={"/packages"}>Packages</NavLink>,
  },
  {
    key: "8",
    icon: <GiftFilled />,
    label: <NavLink to={"/partners"}>Partners</NavLink>,
  },
  {
    key: "9",
    icon: <WalletFilled />,
    label: "Business Wallet",
    children:[{
      key: "9.1",
      label: "Transactions",
    },{
      key: "9.2",
      label: "Add/Deduct Fund",
    },{
      key: "9.3",
      label: "Fund Requests",
    }]
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
          <NavLink to={"/reports/dynamicUpi-report"}>DynamicUpi Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.2");
        },
      },
      {
        key: "1.3",
        label: (
          <NavLink to={"/reports/recharge-report"}>Recharge Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.3");
        },
      },
      {
        key: "1.17",
        label: (
          <NavLink to={"/reports/recharge-report-live"}>Recharge Transactions (Live)

          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.17");
        },
      },
      {
        key: "1.4",
        label: (
          <NavLink to={"/reports/dmt-report"}>DMT Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.4");
        },
      },
      {
        key: "1.5",
        label: (
          <NavLink to={"/reports/creditCard-report"}>CreditCard Transactions</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.5");
        },
      },
      {
        key: "1.6",
        label: (
          <NavLink to={"/reports/bbpsBillFetch-report"}>BBPS Bill Fetch Data </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.6");
        },
      },
      {
        key: "1.7",
        label: (
          <NavLink to={"/reports/bbps-report"}>BBPS Transactions Report</NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.7");
        },
      },
      {
        key: "1.8",
        label: (
          <NavLink to={"/reports/account-verification-report"}>Account Verification Report
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.8");
        },
      },
      {
        key: "1.9",
        label: (
          <NavLink to={"/reports/digiLocker-kyc-report"}>DigiLocker Kyc 
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.9");
        },
      },
      {
        key: "1.10",
        label: (
          <NavLink to={"/reports/verification-api-report"}>Verification API 
          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.10");
        },
      },
      {
        key: "1.11",
        label: (
          <NavLink to={"/reports/walletPayout-report"}>Wallet Payout Transactions

          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.11");
        },
      },
      {
        key: "1.12",
        label: (
          <NavLink to={"/reports/upiDmt-report"}>Upi DMT Transactions

          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.12");
        },
      },
      {
        key: "1.13",
        label: (
          <NavLink to={"/reports/dynamicUpiGenerated-report"}>Dynamic Upi Generated Reports

          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.13");
        },
      },
      {
        key: "1.15",
        label: (
          <NavLink to={"/reports/chargeBack-added"}>Charge-Back Added

          </NavLink>
        ),
        onClick: () => {
          setLocalStorageItem("selectedTab", "1.15");
        },
      },
      {
        key: "1.16",
        label: (
          <NavLink to={"/reports/success-transaction-report"}>SUCCESS Transactions

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
    icon: <SettingFilled />,
    label: "Services",
  },
];
