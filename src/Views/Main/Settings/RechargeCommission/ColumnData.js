import { ExtractDate } from "../../../../Utils/index";
import React from "react";
import { Checkbox, Input} from "antd";

export const columns = (handleCheckboxChange, handleAmoutChange) => {
  return [
    {
      title: "Id",
      dataIndex: "sno",
    },
    {
      title: "Operator Name",
      dataIndex: "operatorName",
   
    },
    {
      title: "Service Type",
      dataIndex: "serviceType",
      
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
