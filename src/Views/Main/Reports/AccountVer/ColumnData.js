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
      title: "Beneficiary Account",
      dataIndex: "benificiaryAccount",
    },
    {
      title: "Beneficiary Name",
      dataIndex: "benificiaryName",
    },
    {
      title: "User Order Id",
      dataIndex: "agentOrderId",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
      },
    {
      title: "Net Amount",
      dataIndex: "netAmount",
      render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "PW Order Id",
      dataIndex: "pinWalletOrderId",
    },
    {
      title: "Reference Id",
      dataIndex: "referenceId",
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
        title: "Status Code",
        dataIndex: "statusCode",
        
      },

    {
      title: "StatusMessage",
      dataIndex: "statusMessage",
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
        dataIndex: "latestUpdatedOn",
        render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,

      },
  ];