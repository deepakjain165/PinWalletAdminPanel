import { ExtractDate } from "../../../../Utils/index";
import React from "react";
import { Checkbox, Input, InputNumber } from "antd";

export const columns = (handleCheckboxChange, handleAmoutChange) => {
  return [
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
      title: "IsFlat",
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
  ];
};
