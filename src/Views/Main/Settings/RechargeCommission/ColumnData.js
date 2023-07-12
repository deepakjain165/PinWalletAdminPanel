import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";
import React from "react";
import { Checkbox,InputNumber } from "antd";
export const columns = [
  {
    title: "Id",
    dataIndex: "sno",
  },
  {
    title: "Operator Name",
    dataIndex: "operatorName",
    //   render:(text,record)=><div className="text-xs">
    //     <p>{text}</p>
    //     <p>{record.partnerEmail}</p>
    //   </div>,
    //   sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
    //   sortDirections: ['ascend'],
  },
  {
    title: "Service Type",
    dataIndex: "serviceType",
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
    title: "Amount",
    dataIndex: "amount",
    render:(text)=>
      <InputNumber min={0} defaultValue={text} />
    
  },
  {
    title: "IsFlat",
    dataIndex: "isFlat",
    render: (text) => (
      // {
      //   const onChange = (e) => {
      //     console.log(`checked = ${e.target.checked}`);
      //   };

      //   return
      <div className="flex justify-center  bg-neutral-500 h-5 w-5">
        <Checkbox value={text} />
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
];
