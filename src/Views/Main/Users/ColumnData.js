import {
    EditFilled,
    PauseOutlined,
    PlayCircleOutlined,
  } from "@ant-design/icons";
  import { ExtractDate } from "../../../Utils";
  
  export const Columns = (
    setpackageId,
    setDeleteModal,
    setOpenModal,
    setOpenFrom,
    handlechangeStatus
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
              text ? "bg-[#31ce36]" : "bg-red-600"
            } text-[11px] w-14 text-center text-white px-2 rounded-full`}
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
        title: "User Code",
        dataIndex: "userCode",
        render: (text, record) => (
          <div className="text-xs">
            <p>{text}</p>
          </div>
        ),
        sorter: (a, b) => a.userCode.localeCompare(b.userCode),
        sortDirections: ["ascend"],
      },
      {
        title: "Full Name",
        dataIndex: "fullName",
        render: (text, record) => (
          <div className="text-xs">
            <p>{text}</p>
          </div>
        ),
        sorter: (a, b) => a.fullName.localeCompare(b.fullName),
        sortDirections: ["ascend"],
      },{
        title: "Email",
        dataIndex: "email",
        render: (text, record) => (
          <div className="text-xs">
            <p>{text}</p>
          </div>
        ),
        sorter: (a, b) => a.email.localeCompare(b.email),
        sortDirections: ["ascend"],
      },{
        title: "Role",
        dataIndex: "role",
        render: (text, record) => (
          <div className="text-xs">
            <p>{text}</p>
          </div>
        ),
        sorter: (a, b) => a.role.localeCompare(b.role),
        sortDirections: ["ascend"],
      },
      {
        title: "Created On",
        dataIndex: "createdOn",
        render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
      },
      {
        title: "Action",
        dataIndex: "isActive",
        render: (text, record) => (
          <div className="flex justify-start items-center ">
            {" "}
            <p
              onClick={() => {
                setOpenModal(true);
                setOpenFrom("edit");
                setpackageId(record);
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
            <p
              onClick={() => {
                  setpackageId(record.id);
                setDeleteModal(true);
              }}
              className="bg-red-600 text-sm font-bold h-7 flex items-center justify-center p-2 m-2 cursor-pointer text-white rounded-md"
            >
              x
            </p>
          </div>
        ),
      },
    ];
  };
  