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
      title: "Account Number",
      dataIndex: "accountNumber",
    },
    {
      title: "IFSC",
      dataIndex: "ifsc",
    },
    {
      title: "User Transaction Id",
      dataIndex: "userTransactionId",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
      },
    {
      title: "Deduct Amount",
      dataIndex: "deductAmount",
      render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "Tds",
      dataIndex: "tds",
      render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "PW Transaction Id",
      dataIndex: "pinwalletTrasnactionId",
    },
    {
      title: "API Transaction Id",
      dataIndex: "apiTransactionId",
    },
    {
        title: "Source",
        dataIndex: "source",
      },
      
    {
        title: "Mode",
        dataIndex: "mode",
        
      },

    {
      title: "Status Message",
      dataIndex: "statusMessage",
    },
    {
        title: "Response Json",
        dataIndex: "responseJson",
      render: (text) => <p className="uppercase w-20 h-14 overflow-scroll">{text}</p>,
      }, {
        title: "Cowin OTP",
        dataIndex: "cowinOTP",
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