import {
    EyeFilled,CheckCircleFilled
  } from "@ant-design/icons";
  import { NavLink } from "react-router-dom";
import { ConvertInRs,ExtractDate, ExtractTime } from "../../../../Utils/index";
  
  export const Columns = (
  ) => {
    return [
      {
        title: "Sr No",
        dataIndex: "sno",
      },
      {
        title: "Status",
        dataIndex: "isActive",
        render: (text) => (
          <p
            className={`${
              text === true ? "bg-[#31ce36]" : "bg-red-600"
            } text-[11px] text-center text-white px-2 rounded-full`}
          >
            {text ? "Active" : "InActive"}
          </p>
        ),
        // filterDropdown:({ setSelectedKeys, selectedKeys, confirm })=>(
        //   <div>
        //      <Select
        //                 placeholder="Select Status"
        //                 value={selectedKeys[0]}
        //                 className="w-full"
        //                 onChange={(val)=>getAllTransaction(numberOfData,start)}
        //                 onSelect={confirm}
        //                 allowClear
        //       >
        //       <Option value="">All</Option>
        //       <Option value="success">Success</Option>
        //       <Option value="failed">Failed</Option>
        //       <Option value="pending">Pending</Option>
  
        //       </Select>
        //   </div>
        // ),
      },
      {
        title: "Email",
        dataIndex: "email",
        render: (text, record) => (
          <div className="text-xs">
            <p>{text}</p>
          </div>
        ),
        sorter: (a, b) => a.email.localeCompare(b.email),
        sortDirections: ["ascend"],
      },
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Total Debit",
        dataIndex: "totalDebit",
        render:(text)=><p>{ConvertInRs(text)}</p>
      },
      {
        title: "Total Credit",
        dataIndex: "totalCredit",
        render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
      },
      {
        title: "Total Balance",
        dataIndex: "totalBalance",
        render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,

      },
      {
        title: "Created On",
        dataIndex: "totalBalance",
        render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,

      },
      {
        title: "Business Wallet",
        dataIndex: "",
        render: (text,record) => (
          <NavLink to={"/business-wallet/transactions"} state={record}><div className="bg-red-500 w-10 flex items-center justify-center py-2 m-2 cursor-pointer text-white rounded-md">
          <EyeFilled/>
        </div></NavLink>
        ),
      },
    ];
  };
  
  export const TransactionColumn=()=>{
    return [
        {
          title: "Sr No",
          dataIndex: "sno",
        },
        {
          title: "Status",
          dataIndex: "isPaid",
          render: (text) => (
            <p
              className={`${
                text === true ? "bg-[#31ce36]" : "bg-red-600"
              } text-[11px] text-center text-white px-2 rounded-full`}
            >
              {text ? <p><CheckCircleFilled className="mb-2"/> Paid</p> : "Unpaid"}
            </p>
          ),
          // filterDropdown:({ setSelectedKeys, selectedKeys, confirm })=>(
          //   <div>
          //      <Select
          //                 placeholder="Select Status"
          //                 value={selectedKeys[0]}
          //                 className="w-full"
          //                 onChange={(val)=>getAllTransaction(numberOfData,start)}
          //                 onSelect={confirm}
          //                 allowClear
          //       >
          //       <Option value="">All</Option>
          //       <Option value="success">Success</Option>
          //       <Option value="failed">Failed</Option>
          //       <Option value="pending">Pending</Option>
    
          //       </Select>
          //   </div>
          // ),
        },
        {
          title: "Transaction Id",
          dataIndex: "transactionId",
          render: (text, record) => (
            <div className="text-xs">
              <p>{text}</p>
            </div>
          ),
          sorter: (a, b) => a.transactionId.localeCompare(b.transactionId),
          sortDirections: ["ascend"],
        },
        {
          title: "Amount",
          dataIndex: "amount",
          render:(text)=><p className="text-sm">{ConvertInRs(text)}</p>
        },
        {
          title: "Closing Balance",
          dataIndex: "balance",
          render:(text)=><p className="text-[12px]">{ConvertInRs(text)}</p>
        },
        {
          title: "Credit/Debit",
          dataIndex: "credit",
          render: (text,record) => (
            <p
              className={`${
                record.credit ? "bg-[#31ce36]" :record.debit? "bg-red-600":""
              } text-[11px] text-center w-10 text-white px-2 rounded-full`}
            >
              {record.credit ?  "Cr." : "Dr."}
            </p>
          ),
        },
        {
          title: "Client Transaction Id",
          dataIndex: "clientTrxId",
  
        },
        {
          title: "Created On",
          dataIndex: "createdOn",
          render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
  
        },
        {
          title: "Time",
          dataIndex: "createdOn",
          render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,

        },
        {
            title: "Service",
            dataIndex: "service",
  
          }, {
            title: "Remark",
            dataIndex: "remark", 
          render: (text) => <p className="h-9 overflow-y-scroll">{text}</p>,
          },
      ];
  }