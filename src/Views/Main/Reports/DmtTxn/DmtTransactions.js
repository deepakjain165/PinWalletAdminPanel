import React, { useEffect, useState } from 'react'
import Header from '../../../../Common/Header'
import { columns } from './ColumnData'
import { getDmtTransactions } from '../../../../services/apiFunctions'
import dayjs from 'dayjs'
import {
  Button,
  DatePicker,
  Input,
  Pagination,
  Select,
  Spin,
  Table,
  message,
} from "antd";
import { DmtTxnPredicate } from '../../../../Utils/Options'
import PaginationComponent from '../../../../Common/Pagination'
import { handleDownloadExcel, messageConfiguration } from '../../../../Utils'
import { endpoint } from '../../../../services/global'
const DmtTransactions = () => {
  const {RangePicker}=DatePicker
  const dateFormat = "YYYY-MM-DD";

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
  const getAllDmtTxn = (page, start) => {
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
    getDmtTransactions(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {
            sno: index + 1,
            partnerName: item.partnerName,
            partnerEmail:item.partnerEmail,
            status: item.txnStatus,
            benificiaryId: item.benificiaryId,
            beneName: item.beneName,
            benificiaryAccount: item.benificiaryAccount,
            benificiaryIfsc: item.benificiaryIfsc,
            userTransactionId: item.userTransactionId,
            amount: item.amount,
            netAmount: item.netAmount,
            tds: item.tds,
            pinWalletOrderId: item.pinWalletOrderId,
            apiRequestTransactionId: item.apiRequestTransactionId,
            apiTransactionResponseOrderId: item.apiTransactionResponseOrderId,
            apiStatusCode: item.apiStatusCode,
            apiStatusMessage: item.apiStatusMessage,
            referenceId: item.referenceId,
            statusCode:item.statusCode,
            statusMessage:item.statusMessage,
            rrn:item.rrn,
            source:item.source,
            transferMode:item.transferMode,
            createdOn: item.createdOn,
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
    getAllDmtTxn(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
    let delayDebounce;
    delayDebounce = setTimeout(() => {
      getAllDmtTxn(numberOfData, 0);
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
    getAllDmtTxn(numberOfData, start);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllDmtTxn(numberOfData, startPage);
  };
  const handleExport = () => {
    handleDownloadExcel(
      fields.fromDate,
      fields.toDate,
      setdisableExport,
      endpoint.exportToExcelDmt
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
    <Header PageName={"DMT Transactions"}/>
    <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
        <div className="input_fields">
          <Select
            className="mb-2 w-full"
            value={fields.type}
            onChange={(val) => setFields({ ...fields, type: val })}
            defaultValue="UserTransactionId"
            options={DmtTxnPredicate}
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
        <Button
          onClick={handleExport}
          disabled={disableExport}
          className="bg-black hover:text-white hover:border-none text-white"
        >
          Export
        </Button>
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
      <PaginationComponent current={current} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllDmtTxn} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  )
}

export default DmtTransactions