import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

export const columns = [
    {
      title: "Sr No",
      dataIndex: "sno",
      render:(text)=><p className="font-bold">{text}</p>
    },
    {
      title: "Partner",
      dataIndex: "partnerName",
      sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
      sortDirections: ['ascend'],
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
      title: "IsRefund",
      dataIndex: "isRefund",
    },
    {
      title: "Refund Action",
      dataIndex: "account",
      sorter: (a, b) => a.account.localeCompare(b.account),
      sortDirections: ['ascend'],
    },
    {
      title: "Operator Name",
      dataIndex: "operatorName",
    },
    {
      title: "Account",
      dataIndex: "account",
    },
    {
      title: "User Transaction Id",
      dataIndex: "userTransactionId",
    },
    {
      title: "Recharge Amount",
      dataIndex: "amount",
      render:(text)=><p>{ConvertInRs(text)}</p>
    },
    {
      title: "Deduct Amount",
      dataIndex: "netAmount",
      render:(text)=><p>{ConvertInRs(text)}</p>
    },
    {
      title: "Commission",
      dataIndex: "commission",
      render:(text)=><p>{ConvertInRs(text)}</p>,
      sorter: (a, b) => a.commission-b.commission,
      sortDirections: ['ascend'],
    },
    {
      title: "PW Transaction Id",
      dataIndex: "pinWalletTransactionId",
    },
    {
      title: "Api Id",
      dataIndex: "apiId",
    },
    {
      title: "Api Message",
      dataIndex: "apiMessage",
      render:(text)=><p className="h-16 py-2 overflow-x-hidden overflow-scroll">{text}</p>
    },
    {
      title: "APIResponseTransactionId",
      dataIndex: "apiResponseTransactionId",
    },
    {
      title: "OperatorReferenceId",
      dataIndex: "operatorReferenceId",
      render: (text) => (
        <div className="h-16 py-2 overflow-x-hidden overflow-scroll">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      render:(text)=><p>{ExtractDate(text)}</p>
    },
    {
      title: "Time",
      dataIndex: "createdOn",
      render:(text)=><p>{ExtractTime(text)}</p>
    },
  ];