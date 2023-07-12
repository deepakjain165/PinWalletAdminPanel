import React from "react";
import Header from "../../../../Common/Header";
import { Table } from "antd";
import {columns} from './ColumnData'
function ServiceBlockTimeSetting(){
    return (
        <div>
        <Header PageName={" Service Block Time Setting "}/>
        <div className="mt-3">
        {/* <Spin spinning={showSpin} tip="Loading..."> */}
        {/* <Table
          className="custom-table overflow-x-scroll text-white rounded-none"
          columns={columns}
        /> */}
        {/* </Spin> */}
      </div>
        </div>
    )
}
export default ServiceBlockTimeSetting;