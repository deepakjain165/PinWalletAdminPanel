import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

export const columns = [
  {
    title: "Sr No",
    dataIndex: "sno",
  },
  {
    title: "Partner",
    dataIndex: "partnerName",
    render: (text, record) => (
      <div className="text-xs">
        <p>{text}</p>
        <p>{record.partnerEmail}</p>
      </div>
    ),
    sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
    sortDirections: ["ascend"],
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <p
        className={`${
          text === "SUCCESS" ? "bg-[#31ce36]" : "bg-red-600"
        } text-xs text-center text-white p-2 rounded-full`}
      >
        {text}
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
    title: "Chanrge Back",
    dataIndex: "chargeBack",
  },
  {
    title: "Payer Amount",
    dataIndex: "payerAmnt",
    render: (text) => <p className="text-xs">{ConvertInRs(text)}</p>,
    sorter: (a, b) => a.payerAmnt - b.payerAmnt,
    sortDirections: ["ascend"],
  },
  {
    title: "Credit Amount",
    dataIndex: "creditAmnt",
    render: (text) => <p className="text-xs">{ConvertInRs(text)}</p>,
  },
  {
    title: "PW Transaction Id",
    dataIndex: "PwTxnId",
  },
  {
    title: "Payer Name",
    dataIndex: "payerName",
  },
  {
    title: "Payer Mobile",
    dataIndex: "payerMobile",
  },
  {
    title: "Payer VA",
    dataIndex: "payerVA",
  },
  {
    title: "Upild",
    dataIndex: "upiid",
  },
  {
    title: "CallBack Re-Hit",
    dataIndex: "pwTxnId",
  },
  {
    title: "MerChant Transaction Id",
    dataIndex: "merchanttranid",
  },
  {
    title: "Transaction Init Date",
    dataIndex: "transactioninitdate",
  },
  {
    title: "Txb Completion Date",
    dataIndex: "txnCompletionDate",
  },
  {
    title: "Terminal Id",
    dataIndex: "terminalid",
  },
  {
    title: "MerChant Id",
    dataIndex: "merchantId",
    render: (text) => (
      <div className="h-16 py-2 overflow-x-hidden overflow-scroll">
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "BankRRN",
    dataIndex: "bankRRN",
  },
  {
    title: "Created On",
    dataIndex: "createdOn",
    render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
  },
  {
    title: "Created Time",
    dataIndex: "createdTime",
    render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
  },
  {
    title: "Updated On",
    dataIndex: "updatedOn",
    render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
  },
  {
    title: "Updated Time",
    dataIndex: "updatedTime",
    render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
  },
  {
    title: "CallBack Data",
    dataIndex: "callBackData",
  },
  {
    title: "Client Response",
    dataIndex: "clientResponse",
  },
];
