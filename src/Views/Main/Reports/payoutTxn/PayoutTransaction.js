import React, { useEffect, useState } from "react";
import { message } from "antd";
import { predicateObjectNames } from "../../../../Utils/Options";
import { getPayoutTransactions } from "./ApiFun";
import dayjs from "dayjs";
import { columns } from "./ColumnData";
import { handleDownloadExcel, messageConfiguration } from "../../../../Utils";
import PaginationComponent from "../../../../Common/Pagination";
import { endpoint } from "../../../../services/global";
import CommonLayout from "../../../../Common/CommonLayout";
import { useCustomState } from "../../../../Hooks/Usehooks";
const PayoutTransaction = () => {
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
  } = useCustomState(getAllTransaction);
  const totalCount = 30;
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: "PinWalletOrderId",
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  function getAllTransaction(page, start) {
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
    getPayoutTransactions(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return {
            sno: index + 1,
            partnerName: item.partnerName,
            status: item.status,
            account: item.benificiaryAccount,
            ifsc: item.benificiaryIfsc,
            userTxnId: item.agentOrderId,
            payoutamnt: item.amount,
            deductAmnt: item.netAmount,
            tds: item.tds,
            pwTxnId: item.pinWalletOrderId,
            benificiaryName: "",
            apiTxnOrderId: item.apiTransactionOrderId,
            referenceId: item.referenceId,
            statusCode: item.statusCode,
            statusMsg: item.statusMessage,
            Rrn: item.rrn,
            source: item.source,
            transferMode: item.transferMode,
            createdOn: item.createdOn,
            createdTime: item.createdOn,
            updatedOn: item.createdOn,
            updatedTime: item.createdOn,
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
  }
  useEffect(() => {
    getAllTransaction(numberOfData, start);
   
  }, []);

  const handleSearchString = () => {
    getAllTransaction(numberOfData, 0);
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
      endpoint.exportToExcelpayout
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
      <CommonLayout
        PageName={"Payout Transactions"}
        setFields={setFields}
        fields={fields}
        options={predicateObjectNames}
        handleSearchString={handleSearchString}
        handleSearch={handleSearch}
        handledateChange={handledateChange}
        handleExport={handleExport}
        disableExport={disableExport}
        showSpin={showSpin}
        columns={columns}
        dataSource={dataSource}
      />
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
        <Input.Search type="number" min={1}  onSearch={(value)=>getAllTransaction(value===""?numberOfData:value,start)} title="df" className="w-20" size="small"/>
        </div>
      </div> */}
      <PaginationComponent
        setNumberOfData={setNumberOfData}
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

export default PayoutTransaction;
