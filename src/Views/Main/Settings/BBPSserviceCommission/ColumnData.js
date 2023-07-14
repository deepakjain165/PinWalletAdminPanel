import { ExtractDate } from "../../../../Utils";
import { Checkbox, Input } from "antd";
export const columns =(handleAmoutChange,handleCheckboxChange)=>{
  return [
    {
      title: "Id",
      dataIndex: "sno",
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
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
      render: (text, record) => (
        <div >
          <Input 
            min={0}
            value={text}
            type="number"  
            className="w-1/2"
            onChange={(e)=> handleAmoutChange(record,e.target.value) }
          />
          {record.isFlat ? <span>Rs.</span> : <span>%</span>}
        </div>
      ),
    },
    {
      title: "IsFLat",
      dataIndex: "isFlat",
      render: (text, record) => (
        // {
        //   const onChange = (e) => {
        //     console.log(`checked = ${e.target.checked}`);
        //   };

        //   return
        <div className="flex justify-center  bg-neutral-500 h-5 w-5">
          <Checkbox
            onChange={() => handleCheckboxChange(record)}
            checked={text}
          />
        </div>
      ),
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
    {
      title: "Updated On",
      dataIndex: "latestUpdatedOn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
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
  
}
 