import React, { useEffect, useState } from "react";
import { getRechargeCommission } from "../../../../services/apiFunctions";
import PaginationComponent from "../../../../Common/Pagination";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import { columns } from "./ColumnData";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { getupdateRechargeCommission } from "../../../../services/apiFunctions";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
function RechargeCommission() {
  const totalCount = 100;
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
  } = useCustomState(getDetailsRechargeCommission, null, 100);
  const [fields, setFields] = useState("");
  function getDetailsRechargeCommission(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {
        Predicate: null,
        Reverse: false,
      },
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: page,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields.type !== null && fields.type !== ""
            ? { PackageId: fields }
            : null,
      },
    };
    getRechargeCommission(payload)
      .then((res) => {
        setShowSpin(false);
        const filterdData = res.items.map((item, index) => {
          return {
            ...item,
            sno: index + 1,
            key: index,
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
    getDetailsRechargeCommission(numberOfData, start);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);
  const handleCheckboxChange = (record) => {
    let newData = [...dataSource];
    newData.map((i, index) => {
      if (i.id === record.id) {
        return (
          (i.isFlat = !i.isFlat)
        )
      
      }
    });
    setDataSource(newData);
  };
  const handleAmoutChange = (record,value) => {
    let newData = [...dataSource];
    newData.map((i)=>{
      if(i.id === record.id){
      return (i.amount=value)
      }
    })
    setDataSource(newData);
  };
  function updateRechargeCommission(page) {
    getupdateRechargeCommission(dataSource)
      .then((res) => {
        message.open(
          messageConfiguration("success", "User Updated Successfully", 3)
        );
        setShowSpin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <CommonSettingLayout
        PageName={"Recharge Commission"}
        setFields={setFields}
        fields={fields}
        btnText={"Update"}
        showButton={true}
        showSpin={showSpin}
        handleButton={updateRechargeCommission}
        columns={columns(handleCheckboxChange,handleAmoutChange)}
        dataSource={dataSource}
      />
      <div className="mt-3">
        <PaginationComponent
          setNumberOfData={setNumberOfData}
          current={current}
          numberOfPAges={numberOfPAges}
          start={start}
          apiFunction={getDetailsRechargeCommission}
          handlepageChange={handlepageChange}
          numberOfData={numberOfData}
        />
      </div>
    </div>
  );
}
export default RechargeCommission;
