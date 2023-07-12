import React from "react";
import Header from "../../../../Common/Header";
import { columns } from "./ColumnData";
import { Table,Select } from "antd";
function AadharPaySurcharges(){
    return (
    <div>
     <Header PageName={"Aadhar Pay Surcharges"}/>
     <div className="input_fields mt-8">
          <Select
            className="mb-2 w-1/4"
            defaultValue={"--Select Package--"}
          />
          <br />
          {/* <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  /> */}
        </div> 
      {/* <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
        <div className="input_fields">
          <Select
            className="mb-2 w-full"
            value={fields.type}
            onChange={(val) => setFields({ ...fields, type: val })}
            defaultValue="PinWalletOrderId"
            options={predicateObjectNames}
          />
          <br />
          <Input.Search value={fields.searchString} onChange={(e)=>setFields({...fields,searchString:e.target.value})} onSearch={handleSearchString} className="searchBar" placeholder="Select and Search" enterButton="Search" size="large"  />
        </div>
        <RangePicker
          allowClear={false}
          value={[
            dayjs(fields.fromDate, dateFormat),
            dayjs(fields.toDate, dateFormat),
          ]}
          onChange={handledateChange}
          className="rounded-none"
        />
        <Button
          className="bg-[#1572e8] hover:text-white text-white hover:border-none"
          title="search"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button
          onClick={handleExport}
          disabled={disableExport}
          className="bg-black hover:text-white hover:border-none text-white"
        >
          Export
        </Button>
      </div> */}
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
export default AadharPaySurcharges;