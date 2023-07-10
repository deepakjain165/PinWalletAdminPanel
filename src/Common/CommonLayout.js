import React from "react";
import {
  Button,
  DatePicker,
  Input,
  Select,
  Spin,
  Table,
} from "antd";
import Header from "./Header";
import dayjs from "dayjs";
const CommonLayout = ({
  PageName,
  setFields,
  fields,
  options,
  handleSearchString,
  handleServiceType,
  handledateChange,
  serviceType,
  handleSearch,
  handleExport,
  disableExport,
  showSpin,
  from="",
  columns,
  dataSource,
}) => {
      const dateFormat = "YYYY-MM-DD";
  const { RangePicker } = DatePicker;
  
  return (
    <>
      <Header PageName={PageName}/>
      <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
      {from==="ChargeBackAdded" &&
      <div className="input_fields">
        <Select
            className="mb-2 w-40"
            value={serviceType}
            onChange={(val) => handleServiceType(val)}
            defaultValue={"All"}
            options={[{
              value:"All",
              label:"All"
            },{
              value:"DynamicUpi",
              label:"dynamic Upi"
            },{
              value:"Payout",
              label:"Payout"
            },]}
          />
          </div>
}
        <div className="input_fields">
          
          <Select
            className="mb-2 w-full"
            value={fields.type}
            onChange={(val) => setFields({ ...fields, type: val })}
            defaultValue={options[0].value}
            options={options}
          />
          <br />
          <Input.Search
            value={fields.searchString}
            onChange={(e) =>
              setFields({ ...fields, searchString: e.target.value })
            }
            onSearch={handleSearchString}
            className="searchBar"
            placeholder="Select and Search"
            enterButton="Search"
            size="large"
          />
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
        {from !=="ChargeBackAdded" &&
        <Button
          onClick={handleExport}
          disabled={disableExport}
          className="bg-black hover:text-white hover:border-none text-white"
        >
          Export
        </Button>
}
      </div>
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={columns}
            pagination={false}
            dataSource={dataSource}
          />
        </Spin>
      </div>
    </>
  );
};

export default CommonLayout;
