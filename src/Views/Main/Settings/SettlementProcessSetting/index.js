import React from "react";
import Header from "../../../../Common/Header";
import { Select } from "antd";
import {columns} from './ColumnData'
function SettlementProcessSetting(){
    return (
        <div>
        <Header PageName={" Settlement Process Setting "}/>
        <div className="mt-3">
        {/* <Spin spinning={showSpin} tip="Loading..."> */}
        <div className="input_fields">
          <h5>Partner ID</h5>
          <Select
            className="mb-2 w-full"
            defaultValue={"--Select Package--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
        {/* </Spin> */}
      </div>
        </div>
    )
}
export default SettlementProcessSetting;