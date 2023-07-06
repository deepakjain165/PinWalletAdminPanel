import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

export const columns = [
    {
      title: "Sr No",
      dataIndex: "sno",
    },
    {
      title: "Partner",
      dataIndex: "partnerName",
      render:(text,record)=><div className="text-xs">
        <p>{text}</p>
        <p>{record.partnerEmail}</p>
      </div>,
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
      title: "Benificiary Id",
      dataIndex: "benificiaryId",
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
      sorter: (a, b) => a.payerAmnt-b.payerAmnt,
      sortDirections: ['ascend'],
    },
    {
      title: "Benificiary Name",
      dataIndex: "beneName",
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
    },
    {
      title: "Account",
      dataIndex: "benificiaryAccount",
    },
    {
      title: "IFSC",
      dataIndex: "benificiaryIfsc",
    },
    {
        title: "User Transaction Id",
        dataIndex: "userTransactionId",
      },
    {
      title: "DMT Amount",
      dataIndex: "amount",
    },
    {
      title: "Deduct Amount",
      dataIndex: "netAmount",
    },
    {
      title: "Tds",
      dataIndex: "tds",
    },
    {
      title: "PW Transaction Id",
      dataIndex: "pinWalletOrderId",
    },
    {
      title: "APIRequestTransaction Id",
      dataIndex: "apiRequestTransactionId",
    },
    {
      title: "API TransactionResponse OrderId",
      dataIndex: "apiTransactionResponseOrderId",
    },
    {
      title: "API StatusCode",
      dataIndex: "apiStatusCode",
      render: (text) => (
        <div className="h-16 py-2 overflow-x-hidden overflow-scroll">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "API Status Message",
      dataIndex: "apiStatusMessage",
      render: (text) => (
        <div className="h-16 py-2 overflow-x-hidden overflow-scroll">
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Reference Id",
      dataIndex: "referenceId",
    },
    {
      title: "Status Code",
      dataIndex: "statusCode",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
    {
      title: "StatusMessage",
      dataIndex: "statusMessage",
      render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
    },
    {
      title: "Rrn",
      dataIndex: "rrn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
    {
      title: "Source",
      dataIndex: "source",
      render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
    },
    {
        title: "Transfer Mode",
        dataIndex: "transferMode",
      },
      {
        title: "Created On",
        dataIndex: "createdOn",
      },
      {
        title: "Created Time",
        dataIndex: "createdTime",
      },{
        title: "Updated On",
        dataIndex: "latestUpdatedOn",
      },{
        title: "Updated Time",
        dataIndex: "latestUpdatedTime",
      },{
        title: "Latitude",
        dataIndex: "latitude",
      },
      {
        title: "Longitude",
        dataIndex: "longitude",
      },
  ];