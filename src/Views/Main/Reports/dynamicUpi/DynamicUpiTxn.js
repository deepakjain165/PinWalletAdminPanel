import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
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
import { columns } from "./ColumnData";
import { DynamicUpiTxnPredicate } from "../../../../Utils/Options";
import {
  getDynamicUoiTrxReport,
} from "../../../../services/apiFunctions";
import { handleDownloadExcel, messageConfiguration } from "../../../../Utils";
import Header from "../../../../Common/Header";
import PaginationComponent from "../../../../Common/Pagination";
import { endpoint } from "../../../../services/global";

const DynamicUpiTxn = () => {
  const dateFormat = "YYYY-MM-DD";

  const { RangePicker } = DatePicker;
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const numberOfData = 30;
  const totalCount = 30;
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: "MerchantTranId",
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  const getAllDynamicTxn = (page, start) => {
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
    getDynamicUoiTrxReport(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {
            sno: index + 1,
            partnerName: item.partnerName,
            status: item.txnStatus,
            payerAmnt: item.payerAmount,
            creditAmnt: item.creditAmount,
            PwTxnId: item.pinWalletTransactionId,
            payerName: item.payerName,
            payerMobile: item.payerMobile,
            payerVA: item.payerVA,
            upiid: item.upiid,
            partnerEmail: item.partnerEmail,
            merchanttranid: item.merchanttranid,
            transactioninitdate: item.transactioninitdate,
            txnCompletionDate: item.txnCompletionDate,
            terminalid: item.terminalid,
            merchantId: item.merchantId,
            bankRRN: item.bankRRN,
            createdOn: item.createdOn,
            createdTime: item.createdOn,
            updatedOn: item.createdOn,
            updatedTime: item.createdOn,
            callBackData: item.callBackData,
            clientResponse: item.clientResponse,
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
    getAllDynamicTxn(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchString = () => {
    let delayDebounce;
    delayDebounce = setTimeout(() => {
      getAllDynamicTxn(numberOfData, 0);
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
    getAllDynamicTxn(numberOfData, start);
  };
  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    // setStart((page - 1) * numberOfData)
    const startPage = (page - 1) * numberOfData;
    getAllDynamicTxn(numberOfData, startPage);
  };
  const handleExport = () => {
    handleDownloadExcel(
      fields.fromDate,
      fields.toDate,
      setdisableExport,
      endpoint.exportToExcelDynamicUpi
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
    <Header PageName={"Dynamic UPI Transactions"}/>
      <div className="filters mt-5 flex justify-start md:justify-around gap-4 items-center flex-wrap">
        <div className="input_fields">
          <Select
            className="mb-2 w-full"
            value={fields.type}
            onChange={(val) => setFields({ ...fields, type: val })}
            defaultValue="MerchantTranId"
            options={DynamicUpiTxnPredicate}
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
      {/* <div className="flex justify-end mt-3 gap-10 items-center">
        <Pagination
          current={current}
          total={numberOfPAges * 30}
          pageSize={30}
          // pageSizeOptions={false}
          showQuickJumper={true}
          showSizeChanger={false}
          onChange={handlepageChange}
        />
        <div className="flex justify-around items-center gap-2">
          <p>PageSize</p>
          <Input.Search
            type="number"
            min={1}
            onSearch={(value) =>
              getAllDynamicTxn(value === "" ? numberOfData : value, start)
            }
            title="df"
            className="w-20"
            size="small"
          />
        </div>
      </div> */}
      <PaginationComponent current={current} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllDynamicTxn} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  );
};

export default DynamicUpiTxn;
