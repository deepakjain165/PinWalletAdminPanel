export const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Service Name",
      dataIndex: "service_name",
    //   render:(text,record)=><div className="text-xs">
    //     <p>{text}</p>
    //     <p>{record.partnerEmail}</p>
    //   </div>,
    //   sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
    //   sortDirections: ['ascend'],
    },
    {
      title: "Amount",
      dataIndex: "amount",
    //   render: (text) => (
    //     <p
    //       className={`${
    //         text === "SUCCESS" ? "bg-[#31ce36]" : "bg-red-600"
    //       } text-xs text-center text-white p-2 rounded-full`}
    //     >
    //       {text}
    //     </p>
    //   ),
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
      title: "IsFLat",
      dataIndex: "isFlat",
    },
    {
      title: "Created On",
      dataIndex: "created_on",
    },
    {
      title: "Updated On",
      dataIndex: "updated_on",
    },
    // {
    //     title: "Actions",
    //     dataIndex: "actions",
    //   },
    // {
    //   title: "User Transaction Id",
    //   dataIndex: "userTransactionId",
    // },
    // {
    //   title: "Amount",
    //   dataIndex: "amount",
    //   render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,

    // },
    // {
    //   title: "PW Transaction Id",
    //   dataIndex: "pinWalletTransactionId",
    // },
    // {
    //   title: "Bill Date",
    //   dataIndex: "billDate",
    // },
    // {
    //     title: "Due Date",
    //     dataIndex: "dueDate",
    //   },
      
    // {
    //     title: "Status Code",
    //     dataIndex: "statusCode",
        
    //   },

    // {
    //   title: "StatusMessage",
    //   dataIndex: "statusMessage",
    // },
    //   {
    //     title: "Created On",
    //     dataIndex: "createdOn",
    //     render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    //   },
    //   {
    //     title: "Created Time",
    //     dataIndex: "createdTime",
    //     render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
    //   },{
    //     title: "Updated On",
    //     dataIndex: "latestUpdatedOn",
    //     render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,

    //   },{
    //     title: "Updated Time",
    //     dataIndex: "latestUpdatedTime",
    //     render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,

    //   },
  ];