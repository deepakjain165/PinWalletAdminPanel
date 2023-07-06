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
      title: "Change Status",
      dataIndex: "address",
    },
    {
      title: "Account",
      dataIndex: "account",
      sorter: (a, b) => a.account.localeCompare(b.account),
      sortDirections: ['ascend'],
    },
    {
      title: "IFSC",
      dataIndex: "ifsc",
    },
    {
      title: "User Transaction Id",
      dataIndex: "userTxnId",
    },
    {
      title: "Payout Amount",
      dataIndex: "payoutamnt",
      render:(text)=><p>{ConvertInRs(text)}</p>
    },
    {
      title: "Deduct Amount",
      dataIndex: "deductAmnt",
      render:(text)=><p>{ConvertInRs(text)}</p>
    },
    {
      title: "Tds",
      dataIndex: "tds",
    },
    {
      title: "PW Transaction Id",
      dataIndex: "pwTxnId",
      sorter: (a, b) => a.pwTxnId.localeCompare(b.pwTxnId),
      sortDirections: ['ascend'],
    },
    {
      title: "Benifieciary Name",
      dataIndex: "benificiaryName",
    },
    {
      title: "API TransactionOrder Id",
      dataIndex: "apiTxnOrderId",
    },
    {
      title: "ReferenceId",
      dataIndex: "referenceId",
    },
    {
      title: "StatusCode",
      dataIndex: "statusCode",
    },
    {
      title: "StatusMessage",
      dataIndex: "statusMsg",
      render: (text) => (
        <div className="h-16 py-2 overflow-x-hidden overflow-scroll">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Rrn",
      dataIndex: "Rrn",
    },
    {
      title: "Source",
      dataIndex: "source",
    },
    {
      title: "TransferMode",
      dataIndex: "transferMode",
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
      title: "Latitude",
      dataIndex: "latitude",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
    },
  ];