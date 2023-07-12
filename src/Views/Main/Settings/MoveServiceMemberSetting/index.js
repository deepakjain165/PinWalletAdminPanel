import React from "react";
import Header from "../../../../Common/Header";
import { Table,Select } from "antd";
import { columns } from "./ColumnData";
function MoveServiceMemberSetting(){
    return (
        <div>
        <Header PageName={" Move Service Member Setting "}/>
        <div className="mt-3 justify-items-center">
          <h6>Package *</h6>
        <div className="input_fields">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select value--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
      </div>
      <div className="mt-3 justify-around ">
          <h6>Service Name *</h6>
        <div className="input_fields justify-items-center">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select value--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
      </div>
      <div className="mt-3 justify-items-center">
          <h6>Move To *</h6>
        <div className="input_fields">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select value--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div>
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
export default MoveServiceMemberSetting;