import {  ExtractDate } from "../../../../Utils/index";

export const columns =  
   [
      {
        title: "Id",
        dataIndex: "sno",
      },
      {
        title: "Partner",
        dataIndex: "partnerName",
          render:(text,record)=><div className="text-xs">
            <p>{record.partnerDetails.partnerName}|{""}{record.partnerDetails.partnerPhone}</p>
            <p>{record.partnerDetails.partnerEmail}</p>
          </div>,
          sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
          sortDirections: ['ascend'],
      },
      {
        title: "Move To",
        dataIndex: "moveTo",
       
      },
      {
        title: "Service",
        dataIndex: "moveService",
      },
      {
        title: "IsActive",
        dataIndex: "isActive",
        render: (text, record) => (
          <div>{
            record.isActive? <p className="flex justify-center items-center  bg-green-600  w-12 rounded-full text-white">yes</p>:
            <p className="flex justify-center items-center  bg-red-600  w-10 rounded-full text-white">no</p>
          }</div>
        
        ),
      },
      {
        title: "Add Date",
        dataIndex: "addDate",
        render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
      },
      {
        title: "Update Date",
        dataIndex: "updateDate",
        render:(text,record)=><div className="text-xs">
        <p>{ExtractDate(record.updateDate)} </p>
      </div>
        
      },
    ];
  
