import React, { useEffect, useState } from "react";
import { getRechargeCommission } from "../../../../services/apiFunctions";
import PaginationComponent from "../../../../Common/Pagination";
import { message } from "antd";
import { messageConfiguration } from "../../../../Utils";
import { columns } from "./ColumnData";
import { PackageName } from "../../../../Utils/Options";
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
    showSelect,
    dataSource,
    setDataSource,
  } = useCustomState(getDetailsRechargeCommission, null, 100);
  const [fields, setFields] = useState(PackageName[0].value);
  const[amount, setAmount] =useState();
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
    console.log(newData)
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
        options={PackageName}
        setFields={setFields}
        fields={fields}
        btnText={"Update"}
        showButton={true}
        showSpin={showSpin}
        handleButton={updateRechargeCommission}
        columns={columns(handleCheckboxChange,handleAmoutChange)}
        dataSource={dataSource}
      />
      {/* <div className="input_fields mt-8">
        <Select
          onChange={(value) => setFields(value)}
          className=" w-1/6  "
          defaultValue={PackageName[0].value}
          options={PackageName}
        />

        <br />
      </div> */}
      {/* <button className="bg-slate-400" onClick={updateRechargeCommission}>
        Update
      </button> */}
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
