import React from "react";
import Header from "../../../../Common/Header";
import { Select } from "antd";
function UTIcouponFeeSetting(){
    return (
        <div>
        <Header PageName={" UTI Coupon Fee Setting "}/>
        <div className="input_fields mt-8">
          <Select
            className="mb-2 w-1/4"
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div> 
        </div> 
       
    )
}
export default UTIcouponFeeSetting;