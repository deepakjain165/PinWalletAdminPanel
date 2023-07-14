import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  GetMenuPermission,
  allowPermissions,
} from "./ApiFun";
import { useCustomState } from "../../../Hooks/Usehooks";
import PaginationComponent from "../../../Common/Pagination";
import { NavLink, useLocation } from "react-router-dom";
import ConfirmModal from "../../../Common/ConfirmModal";
import { CheckOutlined } from "@ant-design/icons";

const AccessRightList = () => {
  const location = useLocation();
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getAllPermission);
  const totalCount = 30;
  const [changeModal, setChange] = useState(false);
  const [detail, setDetail] = useState({
    name: "",
    data: null,
    rightTo: "",
    rightToaccess: "",
  });
  const columns = [
    {
      title: "Sr No",
      dataIndex: "sno",
    },
    {
      title: "Menu",
      dataIndex: "name",
      render: (text, record) => (
        <p className="m-2 font-semibold">
          <i className={`fa ${record.policy.split(" ")[1]}`}></i> {text}
        </p>
      ),
    },
    {
      title: "View",
      dataIndex: "canViewRight",
      render: (text, record) => (
        <p
          onClick={() => {
            setDetail({
              name: "view",
              data: record,
              rightTo: "view",
              rightToaccess: record.canViewRight,
            });
            setChange(true);
          }}
          style={{ transition: "0.5s all ease-in-out" }}
          className={`m-2 cursor-pointer ${
            record.canViewRight ? "bg-black" : "bg-red-600"
          }  w-5 flex justify-center items-center px-1 text-white  font-bold rounded-md`}
        >
          {record.canViewRight ? <CheckOutlined className="py-1" /> : "x"}
        </p>
      ),
    },
    {
      title: "Create",
      dataIndex: "canCreateRight",
      render: (text, record) => (
        <p
          style={{ transition: "0.5s all ease-in-out" }}
          onClick={() => {
            setDetail({
              name: "create",
              data: record,
              rightTo: "create",
              rightToaccess: record.canCreateRight,
            });
            setChange(true);
          }}
          className={`m-2 cursor-pointer ${
            record.canCreateRight ? "bg-black" : "bg-red-600"
          }  w-5 flex justify-center items-center px-1 text-white  font-bold rounded-md`}
        >
          {record.canCreateRight ? <CheckOutlined className="py-1"/> : "x"}
        </p>
      ),
    },
    {
      title: "Edit",
      dataIndex: "canEditRight",
      render: (text, record) => (
        <p
          style={{ transition: "0.5s all ease-in-out" }}
          onClick={() => {
            setDetail({
              name: "edit",
              data: record,
              rightTo: "update",
              rightToaccess: record.canEditRight,
            });
            setChange(true);
          }}
          className={`m-2 cursor-pointer ${
            record.canEditRight ? "bg-black" : "bg-red-600"
          }  w-5 flex justify-center items-center px-1 text-white  font-bold rounded-md`}
        >
          {record.canEditRight ? <CheckOutlined className="py-1"/> : "x"}
        </p>
      ),
    },
    {
      title: "Delete",
      dataIndex: "canDeleteRight",
      render: (text, record) => (
        <p
          style={{ transition: "0.5s all ease-in-out" }}
          onClick={() => {
            setDetail({
              name: "delete",
              data: record,
              rightTo: "delete",
              rightToaccess: record.canDeleteRight,
            });
            setChange(true);
          }}
          className={`m-2 cursor-pointer ${
            record.canDeleteRight ? "bg-black" : "bg-red-600"
          }  w-5 flex justify-center items-center px-1 text-white  font-bold rounded-md`}
        >
          {record.canDeleteRight ? <CheckOutlined className="py-1"/> : "x"}
        </p>
      ),
    },
  ];
  function getAllPermission(page, start) {
    setShowSpin(true);
    const payload = {
      sort: {},
      search: {},
      pagination: { start: start, totalItemCount: totalCount, number: page },
    };
    GetMenuPermission(payload, location.state.id)
      .then((res) => {
        const addnum = res.items.map((i, index) => {
          return { ...i, sno: index + 1 };
        });
        setDataSource(addnum);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllPermission(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = () => {
    const payload = {
      Id: detail.data.roleMenuPolicyId,
      RoleId: location.state.id,
      MenuId: detail.data.id,
      Right: detail.rightTo,
      RightToAccess: !detail.rightToaccess,
    };
    allowPermissions(payload)
      .then((res) => {
        setChange(false);
        getAllPermission(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-between items-center"><p className="font-bold text-lg mb-4">Role List</p>
      <NavLink to={"/roles"}><p className="bg-[#113150] p-2 rounded-md text-white">Back</p></NavLink></div>
      <hr />
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={columns}
            pagination={false}
            dataSource={dataSource}
          />
        </Spin>
      </div>
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {changeModal && (
        <ConfirmModal
          handleDelete={handleChange}
          deleteModal={changeModal}
          btnTxt={`${
            !detail.rightToaccess ? "Yes,grant it!" : "Yes,revoke it!"
          }`}
          desc={`${
            !detail.rightToaccess
              ? "You want to Provide Access Right to this menu!"
              : "You want to revoke access right from this menu!"
          }`}
          setDeleteModal={setChange}
        />
      )}
    </>
  );
};

export default AccessRightList;
