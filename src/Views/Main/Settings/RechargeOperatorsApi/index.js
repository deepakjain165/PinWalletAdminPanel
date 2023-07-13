import React, { useEffect, useState } from "react";
import { Spin, Table, message } from "antd";
import { columns } from "./ColumnData";
import Header from "../../../../Common/Header";
import {
  getRechargeApiList,
  getRechargeOpertatorsApi,
  updateRechargeOperator,
} from "../../../../services/apiFunctions";
import { useCustomState } from "../../../../Hooks/Usehooks";
import PaginationComponent from "../../../../Common/Pagination";
import ConfirmModal from "../../../../Common/ConfirmModal";
import { messageConfiguration } from "../../../../Utils";
function RechargeOperatorsAPI() {
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
  } = useCustomState(getDetailsRechargeOpertatorsApi, null, 100);
  const [openModal, setOpenModal] = useState(false);
  const [field, setField] = useState({
    record: {},
    label: {},
  });
  const [ApiList, setApiList] = useState([]);
  const totalCount = 100;
  function getDetailsRechargeOpertatorsApi(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {},
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
      },
      Search: {},
    };
    getRechargeOpertatorsApi(payload)
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
  const getApiList = () => {
    getRechargeApiList().then((res) => {
      const changed = res.data.map((i, index) => {
        return { label: i.text, value: i.value };
      });
      setApiList(changed);
    });
  };
  useEffect(() => {
    getApiList();
    getDetailsRechargeOpertatorsApi(numberOfData, start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlechange = () => {
    const payload = { text: field.label.label??"-Select API-", value: field.label.value??0 };
      updateRechargeOperator(payload, field.record.id)
        .then((res) => {
          if (res?.responseCode === 200) {
            message.open(messageConfiguration("success", res?.message), 3);
          } else {
            message.open(messageConfiguration("error", res?.message), 3);
          }
          getDetailsRechargeOpertatorsApi(numberOfData, start);
        })
        .catch((err) => console.log(err)).finally(()=>setOpenModal(false))

  };
  return (
    <div>
      <Header PageName={" Recharge Operators API Settings "} />
      <div className="mt-3">
        <Spin spinning={showSpin} tip="Loading...">
          <Table
            className="custom-table overflow-x-scroll text-white rounded-none"
            columns={columns(setOpenModal, ApiList, setField,field)}
            dataSource={dataSource}
            pagination={false}
          />
        </Spin>
      </div>
      <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        apiFunction={getDetailsRechargeOpertatorsApi}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
      {openModal && (
        <ConfirmModal
          handleDelete={handlechange}
          deleteModal={openModal}
          btnTxt={"Yes, Update!"}
          desc={"You want to Update this Recharge Operator API."}
          setDeleteModal={setOpenModal}
        />
      )}
    </div>
  );
}
export default RechargeOperatorsAPI;
