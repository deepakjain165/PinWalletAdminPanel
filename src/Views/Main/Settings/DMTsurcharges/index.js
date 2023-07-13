import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import CommonSettingLayout from "../../../../Common/CommonSettingLayout";
import { PackageName } from "../../../../Utils/Options";
import { useCustomState } from "../../../../Hooks/Usehooks";
import { columns } from "./ColumnData";
import { data } from "autoprefixer";
import { getdmtsurcharg } from "../../../../services/apiFunctions";
import PaginationComponent from "../../../../Common/Pagination";
function DMTsurcharges(){
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
  } = useCustomState(getAllDmtsurcharge, null, 100);
  const totalCount = 100;
  const [fields,setFields]=useState("")
  function getAllDmtsurcharge(page, start) {
    setShowSpin(true);
    const payload = {
      Sort: {},
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        numberOfPages:numberOfPAges,
        Number: page,
      },
      Search: {},
    };
    getdmtsurcharg(payload)
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
  useEffect(()=>{
    getAllDmtsurcharge()
  },[])
    return (
       <>
       <CommonSettingLayout 
       PageName={"DMT Surcharge List"}
       fields={fields}
       handlButton={()=>{}}
       setFields={setFields}
       options={PackageName}
        showSpin={showSpin}
        btnText={"Add Surcharge"}
        showButton={true}
        columns={columns}
        dataSource={dataSource}
       />
       <PaginationComponent
        current={current}
        numberOfPAges={numberOfPAges}
        start={start}
        setNumberOfData={setNumberOfData}
        apiFunction={getAllDmtsurcharge}
        handlepageChange={handlepageChange}
        numberOfData={numberOfData}
      />
       </>
    )
}
export default DMTsurcharges;