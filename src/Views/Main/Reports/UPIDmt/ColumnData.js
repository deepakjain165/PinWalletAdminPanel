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
      title: "Benificiery Name",
      dataIndex: "beneName",
    },
    {
      title: "Benificiary Account",
      dataIndex: "benificiaryAccount",
    },
    {
      title: "User Transaction Id",
      dataIndex: "agentOrderId",
    },
    {
        title: "UPI DMT  Amount",
        dataIndex: "amount",
        render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
      },
    {
      title: "Deduct Amount",
      dataIndex: "netAmount",
      render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "Tds",
      dataIndex: "tds",
      render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "PW Transaction Id",
      dataIndex: "pinWalletOrderId",
    },
    {
      title: "API Transaction Order Id",
      dataIndex: "apiTransactionOrderId",
    },
    {
        title: "Reference Id",
        dataIndex: "referenceId",
      },
      
    {
        title: "Status Code",
        dataIndex: "statusCode",
        
      },

    {
      title: "Status Message",
      dataIndex: "statusMessage",
      render:(text)=><p className="h-10 overflow-scroll overflow-x-hidden">{text}</p>
    },
    {
        title: "Rrn",
        dataIndex: "rrn",
      render: (text) => <p className="uppercase w-20 h-14 overflow-scroll">{text}</p>,
      }, {
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
        dataIndex: "latestUpdatedOn",
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