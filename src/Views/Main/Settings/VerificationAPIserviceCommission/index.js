import React from "react";
import Header from "../../../../Common/Header";
import { Table,Select } from "antd";
import {columns} from './ColumnData'
function VerificationAPIserviceCommission(){
    return (
        <div>
        <Header PageName={" Verification API Service Commission"}/>
        <div className="input_fields mt-8">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select Value--"}
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
export default VerificationAPIserviceCommission;