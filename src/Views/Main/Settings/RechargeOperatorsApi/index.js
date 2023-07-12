import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { columns } from "./ColumnData";
import Header from "../../../../Common/Header";
import { getRechargeOpertatorsApi } from "../../../../services/apiFunctions";
function RechargeOperatorsAPI() {
  const[items,setItems]=useState([])
  const start = 0; 
  const totalCount = 100;
  function getDetailsRechargeOpertatorsApi() {
    const payload = {
      Sort: {},
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: 30,
      },
      Search: {},
    };
    getRechargeOpertatorsApi(payload).then((response) => {
      console.log(response);
setItems(response.items);
    });
  }
  useEffect(() => {
    getDetailsRechargeOpertatorsApi();
  }, []);
  return (
    <div>
      <Header PageName={" Recharge Operators API "} />
      <div className="mt-3">
        <Table
          className="custom-table overflow-x-scroll text-white rounded-none"
          columns={columns}
          dataSource={items}
        />
      </div>
    </div>
  );
}
export default RechargeOperatorsAPI;
