import React, { useEffect, useState } from "react";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
import { PackageName } from "../../../../Utils/Options";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { columns } from "./ColumnData";
import PaginationComponent from "../../../../Common/Pagination";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import { creditEndpoint, deleteCreditsurcharge, getCreditCardSurcharge } from "./ApiFun";
function CreditCardSurcharge() {
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
  } = useCustomState(getAllCreditCardSurcharge, null, 100);
  const totalCount = 100;
  const navigate = useNavigate();
  const [fields, setFields] = useState("");
  const [openModal, setOpenmodal] = useState(false);
  const [recordDetail, setRecordDetail] = useState(null);
  function getAllCreditCardSurcharge(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {},
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields !== null && fields !== "" ? { PackageId: fields } : null,
      },
    };
    getCreditCardSurcharge(payload)
      .then((response) => {
        const addSno = response.items.map((i, index) => {
          return { ...i, sno: index + 1 };
        });
        setDataSource(addSno);
        setNumberOfPages(response.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowSpin(false));
  }
  useEffect(() => {
    getAllCreditCardSurcharge(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);
  const handleNavigate = () => {
    navigate("/common-settings/creditCard-surcharge-setting/change", {
      state: {
        endpoint: creditEndpoint.addsurchargeForCredit,
        from: "Add Credit Card Surcharge",
      },
    });
  };
  const handleDelete = () => {
    deleteCreditsurcharge(`/${recordDetail.id}`)
      .then((res) => {
        message.open(
          messageConfiguration(
            "success",
            "surcharge setting has been deleted.",
            3
          )
        );
        setOpenmodal(false);
        getAllCreditCardSurcharge(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <CommonSettingLayout
        PageName={"Credit Card Surcharge List"}
        fields={fields}
        handleButton={handleNavigate}
        setFields={setFields}
        options={PackageName}
        showSpin={showSpin}
        btnText={"Add Surcharge"}
        showButton={true}
        columns={columns(setRecordDetail, setOpenmodal)}
        dataSource={dataSource}
      />
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        apiFunction={getAllCreditCardSurcharge}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes i delete it."}
          deleteModal={openModal}
          desc={"You want to delete this surcharge setting."}
          setDeleteModal={setOpenmodal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
export default CreditCardSurcharge;
