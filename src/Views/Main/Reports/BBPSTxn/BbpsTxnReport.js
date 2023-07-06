import React, { useEffect, useState } from "react";
import { columns } from "./ColumnData";
import { getBbpsTxn } from "../../../../services/apiFunctions";
import dayjs from "dayjs";
import {
  message,
} from "antd";
import { DmtTxnPredicate } from "../../../../Utils/Options";
import PaginationComponent from "../../../../Common/Pagination";
import { endpoint } from "../../../../services/global";
import { handleDownloadExcel, messageConfiguration } from "../../../../Utils";
import CommonLayout from "../../../../Common/CommonLayout";
const BbpsTxnData = () => {

  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const numberOfData = 30;
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: "UserTransactionId",
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  const getAllBbpsBillTxn = (page, start) => {
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
    getBbpsTxn(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {
            sno: index + 1,
            partnerName: item.partnerName,
            partnerEmail: item.partnerEmail,
            status: item.status,
            billerId: item.billerId,
            category: item.category,
            userTransactionId: item.userTransactionId,
            amount: item.amount,
            pinWalletTransactionId: item.pinWalletTransactionId,
            operatorReferenceId: item.operatorReferenceId,
            operatorMessage: item.operatorMessage,
            apiorderId: item.apiorderId,
            statusCode: item.statusCode,
            statusMessage: item.statusMessage,
            createdOn:item.createdOn,
            createdTime: item.createdOn,
            latestUpdatedOn: item.latestUpdatedOn,
            latestUpdatedTime: item.latestUpdatedOn,
            latitude: item.latitude,
            longitude: item.longitude,
          };
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
    getAllBbpsBillTxn(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
    let delayDebounce;
    delayDebounce = setTimeout(() => {
      getAllBbpsBillTxn(numberOfData, 0);
    }, 300); // Adjust the delay as needed (e.g., 500ms)

    return () => clearTimeout(delayDebounce);
  };
  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };
  const handleSearch = () => {
    getAllBbpsBillTxn(numberOfData, start);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllBbpsBillTxn(numberOfData, startPage);
  };
  const handleExport = () => {
    handleDownloadExcel(
      fields.fromDate,
      fields.toDate,
      setdisableExport,
      endpoint.exportToExcelBbpsData
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
      <CommonLayout
        PageName={"BBPS Transactions Report"}
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
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getAllBbpsBillTxn}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
    </>
  );
};

export default BbpsTxnData;
