import React from "react";
import Header from "../../../../Common/Header";
import { Select} from "antd";
function WalletCappingSetting(){
    return (
        <div>
        <Header PageName={" Wallet Capping Setting"}/>
        <div className="mt-3">
        {/* <Spin spinning={showSpin} tip="Loading..."> */}
        <div className="input_fields">
          <Select
            className="mb-2 w-full"
            defaultValue="PinWalletOrderId"
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
        {/* </Spin> */}
      </div>
        </div>
    )
}
export default WalletCappingSetting;