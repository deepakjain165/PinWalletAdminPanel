import React, { useEffect, useState } from 'react'
import { columns } from './ColumnData'
import {  getDigiLockerKycReport } from './ApiFun'
import dayjs from 'dayjs'
import {
  message,
} from "antd";
import { DmtTxnPredicate } from '../../../../Utils/Options'
import PaginationComponent from '../../../../Common/Pagination'
import { endpoint } from '../../../../services/global'
import { handleDownloadExcel, messageConfiguration } from '../../../../Utils'
import CommonLayout from '../../../../Common/CommonLayout'
import { useCustomState } from '../../../../Hooks/Usehooks';
const DigilockerKyc = () => {
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
  } = useCustomState(getAllDigiLockerKyc);
  const totalCount = 30;;
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: "UserTransactionId",
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  function getAllDigiLockerKyc(page, start) {
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
    getDigiLockerKycReport(payload)
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
    getAllDigiLockerKyc(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
      getAllDigiLockerKyc(numberOfData, 0);
  };
  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };
  const handleSearch = () => {
    getAllDigiLockerKyc(numberOfData, start);
  };
  const handleExport = () => {
    handleDownloadExcel(fields.fromDate,fields.toDate,setdisableExport,endpoint.exportToExcelBbpsBillFetch)
    message.open(messageConfiguration("success","Your File will downloaded Shortly!",5))
  };
  return (
    <>
      <CommonLayout
     PageName={"DigiLocker Kyc Report"}
      setFields={setFields}
      fields={fields}
      options={DmtTxnPredicate}
      handleSearchString={handleSearchString}
      handleSearch={handleSearch}
      handledateChange={handledateChange}
      handleExport={handleExport}
      disableExport={disableExport}
      showSpin={showSpin}
      columns={columns}
      dataSource={dataSource}
      />
      <PaginationComponent setNumberOfData={setNumberOfData} current={current} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllDigiLockerKyc} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  )
}

export default DigilockerKyc