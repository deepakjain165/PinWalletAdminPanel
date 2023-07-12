import React, { useEffect, useState } from "react";
import { DatePicker, Input, Spin, Table, message, Button } from "antd";
import { columns } from "./ColumnData";
import dayjs from "dayjs";
import { getRechargeTransactions } from "../../../../services/apiFunctions";
import { handleDownloadExcel, messageConfiguration } from "../../../../Utils";
import Header from "../../../../Common/Header";
import PaginationComponent from "../../../../Common/Pagination";
import { endpoint } from "../../../../services/global";
const RechargeTxn = () => {
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const numberOfData = 30;
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const [disableExport, setdisableExport] = useState(false);
  const [showSpin, setShowSpin] = useState(false);
  const [fields, setFields] = useState({
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  const getAllTransaction = (page, start) => {
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
              ? { UserTransactionId: fields.searchString }
              : null,
        },
        Sort: {
          Predicate: null,
          Reverse: false,
        },
      },
    };
    getRechargeTransactions(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {
            sno: index + 1,
            partnerName: item.partnerName,
            status: item.status,
            isRefund: item.isRefund,
            operatorName: item.operatorName,
            account: item.account,
            userTransactionId: item.userTransactionId,
            amount: item.amount,
            netAmount: item.netAmount,
            commission: item.commission,
            benificiaryName: "",
            pinWalletTransactionId: item.pinWalletTransactionId,
            apiId: item.apiId,
            apiMessage: item.apiMessage,
            apiResponseTransactionId: item.apiResponseTransactionId,
            operatorReferenceId: item.operatorReferenceId,
            createdOn: item.createdOn,
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
    getAllTransaction(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchString = () => {
    let delayDebounce;
    delayDebounce = setTimeout(() => {
      getAllTransaction(numberOfData, 0);
    }, 300); // Adjust the delay as needed (e.g., 500ms)

    return () => clearTimeout(delayDebounce);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    const startPage = (page - 1) * numberOfData;
    getAllTransaction(numberOfData, startPage);
  };
  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };
  const handleSearch = () => {
    getAllTransaction(numberOfData, start);
  };
  const handleExport = () => {
    handleDownloadExcel(
      fields.fromDate,
      fields.toDate,
      setdisableExport,
      endpoint.exportToExcelRecharge
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
      <Header PageName={"Recharge Transactions"} />
      <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
        <div className="input_fields">
          <Input.Search
            value={fields.searchString}
            onChange={(e) =>
              setFields({ ...fields, searchString: e.target.value })
            }
            onSearch={handleSearchString}
            className="searchBar text-xs"
            placeholder="Search by UserTransaction Id"
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
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getAllTransaction}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
    </>
  );
};

export default RechargeTxn;
