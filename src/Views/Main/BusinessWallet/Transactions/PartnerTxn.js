import { Input, Select, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import PaginationComponent from '../../../../Common/Pagination'
import { useCustomState } from '../../../../Hooks/Usehooks';
import { Columns } from './ColumnData';
import { GetPartnerTxn } from './ApiFun';

const PartnerTxn = () => {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    handlechangeStatus,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getAllPartnerTxn);
  const totalCount = 30;
  const [fields, setFields] = useState({
    type: "Email",
    searchString: "",
  });
  function getAllPartnerTxn(page, start) {
    setShowSpin(true);
    const payload = {
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields.searchString !== null && fields.searchString !== ""
            ? { [fields.type]: fields.searchString }
            : null,
      },
      Sort: {},
    };
    GetPartnerTxn(payload)
      .then((res) => {
        const filterdData = res.items.map((item, index) => {
          return { ...item, sno: index + 1 };
        });
        setDataSource(filterdData);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllPartnerTxn(numberOfData, start);
   
  }, []);
  const handleSearchString = () => {
    getAllPartnerTxn(numberOfData, 0);
  };
  return (
    <>
    <p className="font-bold text-lg mb-4">Business Wallet List</p>
    <div className="flex justify-between items-center flex-wrap gap-y-2">
      {" "}
      <div className="input_fields">
        <Select
          className="mb-2 w-full "
          value={fields.type}
          onChange={(val) => setFields({ ...fields, type: val })}
          defaultValue={"Email"}
          options={[{
            value:"Email",
            label:"Email"
          },{
            value:"FullName",
            label:"Name"
          }]}
        />
        <br />
        <Input.Search
          value={fields.searchString}
          onChange={(e) =>
            setFields({ ...fields, searchString: e.target.value })
          }
          onSearch={handleSearchString}
          className="searchBar w-full "
          placeholder="Select and Search"
          enterButton="Search"
          size="large"
        />
      </div>
      {/* <p className="bg-[#113150] p-3 text-white rounded-lg cursor-pointer">
        Add Partner
      </p> */}
    </div>
    <div className="mt-3">
      <Spin spinning={showSpin} tip="Loading...">
        <Table
          className="custom-table overflow-x-scroll text-white rounded-none"
          columns={Columns(handlechangeStatus)}
          pagination={false}
          dataSource={dataSource}
        />
      </Spin>
    </div>
    <PaginationComponent
      current={current}
      numberOfPAges={numberOfPAges}
      start={start}
      setNumberOfData={setNumberOfData}
      apiFunction={getAllPartnerTxn}
      handlepageChange={handlepageChange}
      numberOfData={numberOfData}
    />
  </>
  )
}

export default PartnerTxn