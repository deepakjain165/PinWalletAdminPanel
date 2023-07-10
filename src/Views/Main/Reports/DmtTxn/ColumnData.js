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
            text === "SUCCESS" ||text=== "ACCEPTED"
              ? "bg-[#31ce36]"
              : text === "FAILED" ||text=== "REJECTED" ||text=== "FAILURE"
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
      title: "Benificiary Id",
      dataIndex: "benificiaryId",
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
      sorter: (a, b) => a.payerAmnt-b.payerAmnt,
      sortDirections: ['ascend'],
    },
    {
      title: "Benificiary Name",
      dataIndex: "beneName",
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
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
    },
    {
      title: "Deduct Amount",
      dataIndex: "netAmount",
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
    },
    {
      title: "Tds",
      dataIndex: "tds",
      render:(text)=><p className="text-xs">{ConvertInRs(text)}</p>,
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
    },
    {
      title: "Rrn",
      dataIndex: "rrn",
    },
    {
      title: "Source",
      dataIndex: "source",
    },
    {
        title: "Transfer Mode",
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

      },{
        title: "Updated On",
        dataIndex: "latestUpdatedOn",
        render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
      },{
        title: "Updated Time",
        dataIndex: "latestUpdatedTime",
        render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,

      },{
        title: "Latitude",
        dataIndex: "latitude",
      },
      {
        title: "Longitude",
        dataIndex: "longitude",
      },
  ];