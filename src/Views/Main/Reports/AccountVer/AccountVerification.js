import React, { useEffect, useState } from 'react'
import { columns } from './ColumnData'
import { getAccountVerification } from '../../../../services/apiFunctions'
import dayjs from 'dayjs'
import {
  message,
} from "antd";
import { AccVerPredicate } from '../../../../Utils/Options'
import PaginationComponent from '../../../../Common/Pagination'
import { endpoint } from '../../../../services/global'
import { handleDownloadExcel, messageConfiguration } from '../../../../Utils'
import CommonLayout from '../../../../Common/CommonLayout'
const AccountVerification = () => {

  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const [numberOfData,setNumberOfData] = useState(30);
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: AccVerPredicate[0].value,
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  const getAllaccountverData = (page, start) => {
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
    getAccountVerification(payload)
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
    getAllaccountverData(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
      getAllaccountverData(numberOfData, 0);
  };
  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };
  const handleSearch = () => {
    getAllaccountverData(numberOfData, start);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllaccountverData(numberOfData, startPage);
  };
  const handleExport = () => {
    handleDownloadExcel(fields.fromDate,fields.toDate,setdisableExport,endpoint.exportToExcelAccVer)
    message.open(messageConfiguration("success","Your File will downloaded Shortly!",5))
  };
  return (
    <>
      <CommonLayout
     PageName={"Account Verification Report"}
      setFields={setFields}
      fields={fields}
      options={AccVerPredicate}
      handleSearchString={handleSearchString}
      handleSearch={handleSearch}
      handledateChange={handledateChange}
      handleExport={handleExport}
      disableExport={disableExport}
      showSpin={showSpin}
      columns={columns}
      dataSource={dataSource}
      />
      <PaginationComponent current={current} setNumberOfData={setNumberOfData} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllaccountverData} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  )
}

export default AccountVerification