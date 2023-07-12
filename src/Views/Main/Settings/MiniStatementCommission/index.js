import React from "react";
import Header from "../../../../Common/Header";
import { Select} from "antd";
function MiniStatementCommission(){
    return (
        <div>
        <Header PageName={"Mini Statement Commission"}/>
        <div className="mt-3 justify-around justify-items-center">
          <h6>Package *</h6>
        <div className="input_fields">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select Package--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
      </div>
        </div>
    )
}
export default MiniStatementCommission;