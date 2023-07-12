
import React from "react";
import Header from "../../../../Common/Header";
import { Table,Select } from "antd";
import {columns} from "./ColumnData"
function MoveServiceAllSetting(){
    return (
        <div>
        <Header PageName={" Move Service All Setting "}/>
        <div className="input_fields mt-8">
        <h6>ServiceName</h6>
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select Service--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div> 
        <div className="input_fields mt-8">
        <h6>Move To</h6>
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select MoveTo--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div> 
        <div className="mt-3">
        {/* <Spin spinning={showSpin} tip="Loading..."> */}
        <Table
          className="custom-table overflow-x-scroll text-white rounded-none"
          columns={columns}
        />
        {/* </Spin> */}
      </div>
        </div>
    )
}
export default MoveServiceAllSetting;