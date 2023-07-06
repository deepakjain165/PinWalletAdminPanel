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
    ],
  },
];
