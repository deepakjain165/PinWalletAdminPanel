import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { GetMenuPermission } from "../../../services/apiFunctions";
import { useCustomState } from "../../../Hooks/Usehooks";
import PaginationComponent from "../../../Common/Pagination";
import { useLocation } from "react-router-dom";
import ConfirmChangeModal from "./ConfirmChangeModal";

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
    name:"",
    data:null
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
          <i className={`fa${record.policy.split(" ")[1]}`}></i> {text}
        </p>
      ),
    },
    {
      title: "View",
      dataIndex: "canViewRight",
      render: (text, record) => (
        <p
          onClick={() => {
            setDetail({name:"view",data:record});
            setChange(true);
          }}
          className="m-2 cursor-pointer bg-red-600 w-5 text-center text-white  font-bold rounded-md"
        >
          x
        </p>
      ),
    },
    {
      title: "Create",
      dataIndex: "canCreateRight",
      render: (text, record) => (
        <p
          onClick={() => {
            setDetail({name:"create",data:record});
            setChange(true);
          }}
          className="m-2 cursor-pointer bg-red-600 w-5 text-center text-white  font-bold rounded-md"
        >
          x
        </p>
      ),
    },
    {
      title: "Edit",
      dataIndex: "canEditRight",
      render: (text, record) => (
        <p
          onClick={() => {
            setDetail({name:"edit",data:record});
            setChange(true);
          }}
          className="m-2 cursor-pointer bg-red-600 w-5 text-center text-white  font-bold rounded-md"
        >
          x
        </p>
      ),
    },
    {
      title: "Delete",
      dataIndex: "canDeleteRight",
      render: (text, record) => (
        <p
          onClick={() => {
            setDetail({name:"delete",data:record});
            setChange(true);
          }}
          className="m-2 cursor-pointer bg-red-600 w-5 text-center text-white  font-bold rounded-md"
        >
          x
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
      Right: detail.name,
      RightToAccess: true,
    };
    console.log(payload)
  };
  return (
    <>
      <p className="font-bold text-lg mb-4">Role List</p>
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
        <ConfirmChangeModal
          handleChange={handleChange}
          changeModal={changeModal}
          setChange={setChange}
        />
      )}
    </>
  );
};

export default AccessRightList;
