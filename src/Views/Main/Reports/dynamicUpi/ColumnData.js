import { BackwardFilled, SendOutlined } from "@ant-design/icons";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

export const columns = (setOpenModal,setRecordDetail)=>{
  return [
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
            text === "SUCCESS" || text === "ACCEPTED"
              ? "bg-[#31ce36]"
              : text === "FAILED" || text === "REJECTED" || text === "FAILURE"
              ? "bg-red-600"
              : "bg-black"
          } text-[10px] text-center text-white px-2 rounded-full`}
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
      dataIndex: "chargeBackId",
      render: (text) => {
        return text !== undefined && text !== "" ? (
          <p className="rounded-full bg-[#31ce36] text-white text-xs px-2 py-1">
            ChargeBackAdded
          </p>
        ) : (
          <p className="bg-blue-400 w-8 text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md">
          <SendOutlined />
        </p>
        );
      },
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
      dataIndex: "",
      render: (text,record) => (
        <p onClick={()=>{
          setRecordDetail(record)
          setOpenModal(true)
        }} className="bg-black p-2 cursor-pointer flex justify-center items-center rounded-md w-10">
          <BackwardFilled className="text-white" />
        </p>
      ),
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
      title: "Txn Completion Date",
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
  
}