import {
  DisconnectOutlined,
  EditFilled,
  FileTextOutlined,
  InfoCircleFilled,
  KeyOutlined,
  MenuOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { ExtractDate } from "../../../Utils";
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

export const Columns = (
  handlechangeStatus,handleOpenKeyModal
) => {
  return [
    {
      title: "Sr No",
      dataIndex: "sno",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (text) => (
        <p
          className={`${
            text === true ? "bg-[#31ce36]" : "bg-red-600"
          } text-[11px] text-center text-white px-2 rounded-full`}
        >
          {text ? "Active" : "InActive"}
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
      title: "email",
      dataIndex: "email",
      render: (text, record) => (
        <div className="text-xs">
          <p>{text}</p>
        </div>
      ),
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ["ascend"],
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Mobile",
      dataIndex: "phone",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
    {
      title: "Services",
      dataIndex: "partnerServices",
      render: (text) => (
        <Tooltip
          color="blue"
          placement="bottomLeft"
          title={text.map((i) => (
            <p>{i}</p>
          ))}
        >
          <InfoCircleFilled className="text-lg text-[#ff0000]" />
        </Tooltip>
      ),
    },
    {
      title: "Doc",
      dataIndex: "amount",
      render: (text) => (
        <div className="bg-purple-500 flex items-center justify-center py-2 m-2 cursor-pointer text-white rounded-md">
          <FileTextOutlined />
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "isActive",
      render: (text, record) => (
        <div className="flex justify-start items-center ">
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
          <p
            onClick={() => {
              handlechangeStatus(record.id);
            }}
            className="bg-black text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md"
          >
            {text ? <PauseOutlined /> : <PlayCircleOutlined />}
          </p>
          <NavLink to="/partner-ips" state={record}>
            <p className="bg-black text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md">
              <MenuOutlined />
            </p>
          </NavLink>
          <p
            onClick={() => {
              // setDeleteModal(true);
              // setpackageId(record);
            }}
            className="bg-red-600 text-md h-7 font-bold flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md"
          >
            x
          </p>
        </div>
      ),
    },
    {
      title: "CallBack",
      dataIndex: "pinWalletOrderId",
      render: (text) => (
        <div className="bg-blue-400 flex items-center justify-center py-2 m-2 cursor-pointer text-white rounded-md">
          <DisconnectOutlined />
        </div>
      ),
    },
    {
      title: "Passkey",
      dataIndex: "referenceId",
      render: (text,record) => (
        <div className="flex justify-start items-center">
          <p onClick={()=>handleOpenKeyModal(record.id)} className="bg-blue-800 text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md">
            <KeyOutlined />
          </p>
          <p className="bg-blue-400 text-xs flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md">
            <SendOutlined />
          </p>
        </div>
      ),
    },
  ];
};
