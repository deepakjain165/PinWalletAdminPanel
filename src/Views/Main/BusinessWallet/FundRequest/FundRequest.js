import React, { useEffect, useState } from 'react'
import { columns } from './ColumnData'
import { GetFundRequests } from '../../../../services/apiFunctions'
import dayjs from 'dayjs'

import {  fundreqPredicate } from '../../../../Utils/Options'
import PaginationComponent from '../../../../Common/Pagination'
import CommonLayout from '../../../../Common/CommonLayout'
import { useCustomState } from '../../../../Hooks/Usehooks';
const FundRequest = () => {
  const {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
  } = useCustomState(getAllFundRequests);
  const totalCount = 30;
  const [fields, setFields] = useState({
    type: fundreqPredicate[0].value,
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  function getAllFundRequests (page, start){
    setShowSpin(true);
    const payload = {
      fromDate: fields.fromDate,
      toDate: fields.toDate,
      smartTable: {
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
        Sort: {
          Predicate: null,
          Reverse: false,
        },
      },
    };
    GetFundRequests(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {...item,sno:index+1}
        });
        setDataSource(filterdData);
        setNumberOfPages(res.numberOfPages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setShowSpin(false));
  };
  useEffect(() => {
    getAllFundRequests(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
      getAllFundRequests(numberOfData, 0);
  };
  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };
  const handleSearch = () => {
    getAllFundRequests(numberOfData, start);
  };
  return (
    <>
      <CommonLayout
     PageName={"Requests"}
      setFields={setFields}
      fields={fields}
      options={fundreqPredicate}
      handleSearchString={handleSearchString}
      handleSearch={handleSearch}
      handledateChange={handledateChange}
      showSpin={showSpin}
      showExport={false}
      columns={columns()}
      dataSource={dataSource}
      />
      <PaginationComponent current={current} setNumberOfData={setNumberOfData} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllFundRequests} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  )
}

export default FundRequest