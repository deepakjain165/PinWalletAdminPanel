import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getLiveRecharge } from "./ApiFun";
import { columns } from "./ColumnData";
import { ReloadOutlined } from "@ant-design/icons";

const LiveRecharge = () => {
  const [dataSource, setDataSource] = useState([]);
  const getAllLiveRecharge = () => {
    getLiveRecharge()
      .then((res) => {
        const addCount = res.data.map((item, index) => {
          return { ...item, sno: index + 1 };
        });
        setDataSource(addCount.reverse());
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllLiveRecharge();
    let timer = setInterval(() => {
      getAllLiveRecharge();
    }, 2000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="header flex justify-start items-center gap-2 m-3  text-lg font-bold ">
        <p>Recharge Live Transactions</p>
        <ReloadOutlined
          onClick={getAllLiveRecharge}
          className="cursor-pointer"
        />
      </div>
      <Table
        className="custom-table table-rows overflow-x-scroll text-white rounded-none"
        columns={columns}
        pagination={false}
        dataSource={dataSource}
      />
    </>
  );
};

export default LiveRecharge;
