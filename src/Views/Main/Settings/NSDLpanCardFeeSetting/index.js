import React from "react";
import Header from "../../../../Common/Header";
import { Select } from "antd";
function NSDLpanCardFeeSetting() {
  return (
    <div>
      <Header PageName={" NSDL PAN Card Fee Setting "} />
      <div className="mt-3 text-center">
        {/* <Spin spinning={showSpin} tip="Loading..."> */}
        <div className="input_fields justify-items-center">
          <h6>Package</h6>
          <Select className="mb-2 w-1/4" 
          defaultValue={"--Select value--"}/>
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
        {/* </Spin> */}
      </div>
    </div>
  );
}
export default NSDLpanCardFeeSetting;