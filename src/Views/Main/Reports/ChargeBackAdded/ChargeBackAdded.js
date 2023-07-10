import React, { useEffect, useState } from "react";
import { getChargeBackAdded } from "../../../../services/apiFunctions";
import dayjs from "dayjs";
import { message } from "antd";
import { ChargeBackAddedPredicate } from "../../../../Utils/Options";
import PaginationComponent from "../../../../Common/Pagination";
import { endpoint } from "../../../../services/global";
import { handleDownloadExcel, messageConfiguration } from "../../../../Utils";
import CommonLayout from "../../../../Common/CommonLayout";
import Columns from "./ColumnData";
import RrnDetailModal from "./RrnDetailModal";
import { useCustomState } from "../../../../Hooks/Usehooks";
const ChargeBackAdded = () => {
  const totalCount = 30;
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
  } = useCustomState(getAllChargeBackAdded);
  const [serviceType, setServiceType] = useState("All");
  const [disableExport, setdisableExport] = useState(false);
  const [fields, setFields] = useState({
    type: ChargeBackAddedPredicate[0].value,
    searchString: "",
    fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
  });
  const [openModal, setOpenModal] = useState(false);
  const [rrnNo, setRrnNo] = useState("");
  function getAllChargeBackAdded  (page, start) {
    setShowSpin(true);
    let payload = {
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
            fields.searchString !== null &&
            fields.searchString !== "" &&
            serviceType !== "All"
              ? { [fields.type]: fields.searchString, ServiceId: serviceType }
              : fields.searchString !== null &&
                fields.searchString !== "" &&
                serviceType === "All"
              ? { [fields.type]: fields.searchString }
              : serviceType !== "All"
              ? { ServiceId: serviceType }
              : {},
        },
        Sort: {
          Predicate: null,
          Reverse: false,
        },
      },
    };
    getChargeBackAdded(payload)
      .then((res) => {
        setFields({ ...fields, searchString: "" });
        const filterdData = res.items.map((item, index) => {
          return { ...item, sno: index + 1 };
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
    getAllChargeBackAdded(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceType]);

  const handleOpenDetailModal = (value) => {
    setRrnNo(value);
    setOpenModal(true)
};
  const handleSearchString = () => {

      getAllChargeBackAdded(numberOfData, 0);

  };
  const handleServiceType = (data) => {
    setServiceType(data);
  };

  const handledateChange = (date) => {
    const dates = date.map(
      (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
    );
    setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
  };

  const handleSearch = () => {
    getAllChargeBackAdded(numberOfData, start);
  };

  const handleExport = () => {
    handleDownloadExcel(
      fields.fromDate,
      fields.toDate,
      setdisableExport,
      endpoint.exportToExcelVerAPIData
    );
    message.open(
      messageConfiguration("success", "Your File will downloaded Shortly!", 5)
    );
  };
  return (
    <>
      <CommonLayout
        PageName={"Charge-Back Added"}
        setFields={setFields}
        fields={fields}
        from="ChargeBackAdded"
        options={ChargeBackAddedPredicate}
        serviceType={serviceType}
        handleSearchString={handleSearchString}
        handleSearch={handleSearch}
        handledateChange={handledateChange}
        handleExport={handleExport}
        disableExport={disableExport}
        handleServiceType={handleServiceType}
        showSpin={showSpin}
        columns={Columns(dataSource, handleOpenDetailModal)}
        dataSource={dataSource}
      />
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        apiFunction={getAllChargeBackAdded}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
        setNumberOfData={setNumberOfData}
      />
      {openModal && (
        <RrnDetailModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          rrnno={rrnNo}
        />
      )}
    </>
  );
};

export default ChargeBackAdded;
