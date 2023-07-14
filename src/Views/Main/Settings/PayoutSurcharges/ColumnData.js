import { ConvertInRs, ExtractDate } from "../../../../Utils";
import { EditFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { PayoutEndpoint } from "./ApiFun";
export const columns = (setRecordDetail,setOpenmodal)=>{
  return [
    {
      title: "Id",
      dataIndex: "sno",
    },
    {
      title: "Start Range",
      dataIndex: "startRange",
    },
    {
      title: "End Range",
      dataIndex: "endRange",
    },
    {
      title: "Surcharge",
      dataIndex: "surcharge",
      render: (text) => <p>{ConvertInRs(text)}</p>,
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      render: (text) => <p>{ExtractDate(text)}</p>,
    },
    {
      title: "Updated On",
      dataIndex: "latestUpdatedOn",
      render: (text) => <p>{ExtractDate(text)}</p>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex justify-start items-center ">
          <NavLink to={"/common-settings/payout-surcharge-setting/change"} state={{endpoint:PayoutEndpoint.PayoutSurchargefun,from:"Edit Payout Surcharge",record,getEndpoint:PayoutEndpoint.PayoutSurchargefun}}>
            <p
              onClick={() => {
                // setOpenModal(true);
                // setOpenFrom("edit");
                // setpackageId(record);
              }}
              className="bg-black text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md"
            >
              <EditFilled />
            </p>
          </NavLink>
          <p
            onClick={() => {
              setRecordDetail(record)
              setOpenmodal(true)
            }}
            className="bg-red-600 text-md h-7 font-bold flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md"
          >
            x
          </p>
        </div>
      ),
    },
  ];
}
