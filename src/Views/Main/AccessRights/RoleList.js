import { Spin, Table } from "antd";
import React, { useEffect } from "react";
import { GetRoles } from "../../../services/apiFunctions";
import { useCustomState } from "../../../Hooks/Usehooks";
import { EditFilled } from "@ant-design/icons";
import PaginationComponent from "../../../Common/Pagination";
import { NavLink } from "react-router-dom";

const RoleList = () => {
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
  } = useCustomState(getAllRoles);
  const totalCount = 30;

  const columns = [
    {
      title: "Sr No",
      dataIndex: "sno",
    },
    {
      title: "Role",
      dataIndex: "name",
      render:(text)=><p className="m-2 font-semibold">{text}</p>
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text,record) =><NavLink to="/role-permission" state={record}><EditFilled className="bg-red-600 cursor-pointer text-white w-10 p-2 rounded-md"/></NavLink>,
    },
  ];
  function getAllRoles(page, start) {
    setShowSpin(true);
    const payload = {
      sort: {},
      search: {},
      pagination: { start: start, totalItemCount: totalCount, number: page },
    };
    GetRoles(payload)
      .then((res) => {
        const addnum=res.items.map((i,index)=>{
            return {...i,sno:index+1}
        })
        setDataSource(addnum)
        setNumberOfPages(res.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllRoles(numberOfData, start);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    </>
  );
};

export default RoleList;
