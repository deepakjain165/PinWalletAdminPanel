import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

 const Columns = (data,handleOpenDetailModal)=>{
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
          title: "Servicer",
          dataIndex: "serviceId",
          render: (text, record) => (
            <div className="text-xs">
              <p>{text}</p>
            </div>
          ),
          sorter: (a, b) => a.serviceId - b.serviceId,
          sortDirections: ["ascend"],
        },
        {
          title: "Status",
          dataIndex: "status",
          filters: [
            {
              text: 'ACCEPTED',
              value: 'ACCEPTED',
            },
            {
              text: 'SUCCESS',
              value: 'SUCCESS',
            },],
            onFilter: (value, record) => record.status === value,
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
        //     filterIcon: filtered => (
        //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //                 {filtered ? <span style={{ color: '#1890ff' }}>●</span> : <span>○</span>}
        //         </div>
        //             ),
        //   filterDropdown:({ setSelectedKeys, selectedKeys, confirm })=>(
        //     <div>
        //        <Select
        //                   placeholder="Select Status"
        //                   value={selectedKeys[0]}
        //                   className="w-full"
        //                   onChange={(val)=>alert(val)}
        //                   onSelect={confirm}
        //                   allowClear
        //         >
        //         <Option value="">All</Option>
        //         <Option value="accepted">Accepted</Option>
        //         <Option value="success">Success</Option>
        //         <Option value="failed">Failed</Option>
        //         <Option value="pending">Pending</Option>
      
        //         </Select>
        //     </div>
        //   ),
        },
        {
          title: "Bank RRN",
          dataIndex: "bankRrn",
          render: (text) => (
            <p onClick={()=>handleOpenDetailModal(text)} className="border border-blue-400 p-3 cursor-pointer hover:bg-blue-500 hover:text-white">
              {text}
            </p>
          ),
        },
        {
          title: "Action",
          dataIndex: "action",
          render:()=><p className="bg-red-500 text-white font-bold py-1 cursor-pointer rounded-md text-xs text-center">Reject</p>
        },
        {
          title: "PW Transaction Id",
          dataIndex: "pinWalletTransactionId",
        },
        {
          title: "Payer Amount",
          dataIndex: "amount",
          render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
        },
        {
          title: "Credit Amount",
          dataIndex: "creditAmount",
          render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
        },
        {
          title: "Client Transaction Id",
          dataIndex: "clientTransactionId",
        },
      
        {
          title: "Accepted Date",
          dataIndex: "acceptedDate",
          render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
        },
        {
          title: "Transaction Date",
          dataIndex: "transactionDate",
          render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
      
        },
        {
          title: "Created On",
          dataIndex: "createdOn",
          render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
        },
        {
          title: "Created Time",
          dataIndex: "createdOn",
          render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
        },
        {
          title: "Updated On",
          dataIndex: "latestUpdatedOn",
          render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
        },
        {
          title: "Updated Time",
          dataIndex: "latestUpdatedOn",
          render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
        },
      ];
}

export default Columns;