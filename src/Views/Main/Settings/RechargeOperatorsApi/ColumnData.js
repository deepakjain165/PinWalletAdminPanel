import { Select } from "antd";
import {ReloadOutlined} from "@ant-design/icons"
export const columns =(setOpenModal,ApiList,setField,field)=>{
  return  [
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
      title: "API Name",
      dataIndex: "apiName",
    },
    {
      title: "IsActive",
      dataIndex: "isActive",
      render:(text)=>(
        <p className="text-center text-xs uppercase">
        {text? (
          <p className="bg-green-600 rounded-full p-1 text-xs text-white w-11">Yes</p>
        ) : <p>No</p>}
      </p>
      )
   
    },
    {
      title: "Change API",
      dataIndex: "changeapi",
      render:(text,record)=>(
        <Select labelInValue onChange={(val)=>setField({record:record,label:val})} placeholder="Select An Api" options={ApiList}/>
      )
    },
    {
        title: "Actions",
        dataIndex: "",
        render:(text,record)=>(
         <p onClick={()=>{
          setField({...field,record})
          setOpenModal(true)}} className="flex justify-center items-center border border-yellow-400 w-9 rounded-md p-1 text-yellow-600 cursor-pointer hover:bg-yellow-400 hover:text-black transition-all"> <ReloadOutlined /></p>
        )
      },

  ];
}